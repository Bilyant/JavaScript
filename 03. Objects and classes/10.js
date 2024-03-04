function solve(songsData) {

    let songsCount = songsData.shift()
    let songType = songsData.pop()
    let songs = [];

    class Song {
        constructor (type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < songsCount; i++) {
        
        const [type, name, time] = songsData[i].split('_') 
        let song = new Song(type, name, time)
        songs.push(song)
    }

    for (const song of songs) {
        
        if (song.type === songType) {
            console.log(song.name)
        }
    }

};  

solve(
    [3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']        
);

solve(
    [4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']    
)