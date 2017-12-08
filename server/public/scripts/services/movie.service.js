app.service('MovieService', [ '$http', function ($http) {
    var self = this;

    self.movie = { list:[] };

    self.getMovie = function () {
        console.log('in get movie');
        
        $http({
            method: 'GET',
            url: '/movie'
        }).then(function(response) {
            console.log('response', response);
            self.movie.list = response.data;            
        })
    }
    
        self.addNewMovie = function(newMovie) {
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
    
}]);

