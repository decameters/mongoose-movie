app.controller('MovieDetailController', ['MovieService', '$routeParams', function (MovieService, $routeParams) {
    var self = this;

    self.movieDetail = MovieService.moviedetail 
    self.movieId = $routeParams._id
    MovieService.getMovieDetails($routeParams._id);
    console.log('id ',$routeParams._id);
    
    
}])


