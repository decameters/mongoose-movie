app.controller('AddMovieController', ['MovieService', function (MovieService) {
    var self = this;

    self.addNewMovie = MovieService.addNewMovie;
    
}])


