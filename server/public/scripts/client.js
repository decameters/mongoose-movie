var app = angular.module('MovieApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/movie.html',
        controller: 'MovieController as vm'
    }).when('/addmovie', {
        templateUrl: '/views/addmovie.html',
        controller: 'AddMovieController as vm'
    }).when('/moviedetails/:_id', {
        templateUrl: '/views/moviedetail.html',
        controller: 'MovieDetailController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});