function solve(data) {

    let songsCount = data.shift();
    let songs = [];

    for (let i = 0; i < songsCount; i++) {

        let [song, author, key] = data.shift().split('|');
        let songObj = { author, song, key };
        songs.push(songObj);
    }

    for (let i = 0; i < data.length; i++) {
        
        let element = data[i];

        if (element == 'Stop') {

            songs.forEach(songObj => {
                console.log(`${songObj.song} -> Composer: ${songObj.author}, Key: ${songObj.key}`)
            })
            break;
        }

        let line = element.split('|');
        let command = line[0];

        if (command == 'Add') {
            let [pieceToAdd, composer, key] = line.slice(1, line.length);
            addPiece(pieceToAdd, composer, key);
        }
        else if (command == 'Remove') {
            let pieceToRemove = line[1]
            removePiece(pieceToRemove);
        }
        else if (command == 'ChangeKey') {
            let [piece, newKey] = line.slice(1, line.length);
            changeKey(piece, newKey);
        }
        
    }

    function getSong(song) {
        let result;

        songs.forEach(songObj => {
            if (song == songObj.song) {
                result = songObj;
            }
        })

        return result
    };

    function addPiece(pieceToAdd, composer, key) {
        let song = getSong(pieceToAdd);

        if (song) {
            console.log(`${pieceToAdd} is already in the collection!`);
        }
        else {
            songs.push({ author: composer, song: pieceToAdd, key })
            console.log(`${pieceToAdd} by ${composer} in ${key} added to the collection!`)
        }

    };

    function removePiece(pieceToRemove) {
        let song = getSong(pieceToRemove);

        if (song) {
            idx = songs.indexOf(song);
            songs.splice(idx, 1);
            console.log(`Successfully removed ${pieceToRemove}!`)
        }
        else {
            console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`)
        }
    };

    function changeKey(piece, newKey) {
        let song = getSong(piece)

        if (song) {
            song.key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        }
        else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    };
};


solve(
        [
            '3',
            'Fur Elise|Beethoven|A Minor',
            'Moonlight Sonata|Beethoven|C# Minor',
            'Clair de Lune|Debussy|C# Minor',
            'Add|Sonata No.2|Chopin|B Minor',
            'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
            'Add|Fur Elise|Beethoven|C# Minor',
            'Remove|Clair de Lune',
            'ChangeKey|Moonlight Sonata|C# Major',
            'Stop'  
        ]
);

// solve(
//     [
//         '4',
//         'Eine kleine Nachtmusik|Mozart|G Major',
//         'La Campanella|Liszt|G# Minor',
//         'The Marriage of Figaro|Mozart|G Major',
//         'Hungarian Dance No.5|Brahms|G Minor',
//         'Add|Spring|Vivaldi|E Major',
//         'Remove|The Marriage of Figaro',
//         'Remove|Turkish March',
//         'ChangeKey|Spring|C Major',
//         'Add|Nocturne|Chopin|C# Minor',
//         'Stop'
//       ]      
// )
 