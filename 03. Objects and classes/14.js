function solve(moviesData) {
    let movies = [];
    let onDate = 'onDate';
    let directedBy = 'directedBy';
    let idx;

        for (const movie of  moviesData) {
            let line = movie.split(' ');
            let command = line[0];

            if (command === 'addMovie') {
                let movie = line.slice(1, line.length).join(' ')
                let movieObj = {
                    'name': movie,
                    'director': '',
                    'date': '',
                }
                movies.push(movieObj)
            }

            else {

                if (line.includes(directedBy)) {
                    idx = line.indexOf(directedBy);
                }
                else if (line.includes(onDate)) {
                    idx = line.indexOf(onDate)
                }

                let movie = line.slice(0, idx).join(' ')
                let movieInfo = line.slice(idx+1, line.length).join(' ')

                for (let movieObj of movies) {

                    if (movieObj.name == movie) {
                        let info = line[idx]

                        if (info == 'directedBy') {
                            movieObj['director'] = movieInfo
                        }
                        else if (info == 'onDate') {
                            movieObj['date'] = movieInfo
                        }
                    }
                }
            }
        }

        for (const obj of movies) {
            if (obj['name'] != '' && obj['director'] != '' && obj['date'] != '') {
                console.log(JSON.stringify(obj))
            }
        }

};

solve(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]        
);

// solve(
//     [
//         'addMovie The Avengers',
//         'addMovie Superman',
//         'The Avengers directedBy Anthony Russo',
//         'The Avengers onDate 30.07.2010',
//         'Captain America onDate 30.07.2010',
//         'Captain America directedBy Joe Russo'
//     ]    
// );