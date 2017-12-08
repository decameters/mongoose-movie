app.service('MovieService', ['$http', function ($http) {
    var self = this;

    self.movie = { list: [] };

    self.moviedetail = { list: [] };

    self.getMovie = function () {

        $http({
            method: 'GET',
            url: '/movie'
        }).then(function (response) {
            console.log('response', response);
            self.movie.list = response.data;
        })
    }

    self.addNewMovie = function (newMovie) {
        console.log(newMovie);

        $http({
            method: 'POST',
            url: '/movie',
            data: newMovie
        }).then(function (response) {
            console.log('response', response);
            self.getMovie();
            newMovie.title = '';
            newMovie.posterUrl = '';
            newMovie.description = '';

        })
    }

    self.getMovieDetails = function (id) {
        console.log('in get movie details');
        console.log(id);
        
        $http({
            method: 'GET',
            url: '/movie/' + id
        }).then(function (response) {
            console.log('response', response);
            self.moviedetail.list = response.data;
        })
    }
}]);

