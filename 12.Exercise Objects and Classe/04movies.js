function movies(input) {
    let listOfMovies = [];

    for (const lines of input) {
        if (lines.includes("addMovie")) {
            let movieName = lines.split("addMovie ")[1];
            listOfMovies.push({ name: movieName })
        } else if (lines.includes("directedBy")) {
            let info = lines.split(" directedBy ");
            let name = info[0];
            let director = info[1];
            let movie = listOfMovies.find((element) => element.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (lines.includes("onDate")) {
            let info = lines.split(" onDate ");
            let name = info[0];
            let data = info[1];
            let movie = listOfMovies.find((element) => element.name === name);
            if (movie) {
                movie.date = data;
            }
        }
    }

    for (let movie of listOfMovies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])