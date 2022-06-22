const Movie = require('../models/model')


const moviesList = [
    { year: "2001", name: 'Harry Potter and the Chamber of Secrets', genre: "abc" },
    { year: "2002", name: 'Harry Potter and the Prisoner of Azkaban', genre: "abc" },
    { year: "2003", name: 'Harry Potter and the Goblet of Fire', genre: "abc" }
]

const resolvers = {
    movies: () => {
        return Movie.find({})
    },
    addMovie: (args) => {
        let movie = new Movie({
            name: args.name,
            genre: args.genre,
            year: args.year
        })

        movie.save()
        return movie
    },
    getMovieById: (args) => {
        return Movie.findOne({name: args.name})
    }
}


module.exports = resolvers