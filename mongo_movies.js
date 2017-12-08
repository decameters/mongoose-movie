use movies;

db.createCollection('movies');

db.movies.insert({
    title: "" ,
    posterUrl: "" ,
    description: ""
    });