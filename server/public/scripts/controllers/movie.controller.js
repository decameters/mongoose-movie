app.controller('MovieController', ['MovieService', function (MovieService) {
    var self = this;

    self.movie = MovieService.movie;
    // MovieService.getMovie();
}])



