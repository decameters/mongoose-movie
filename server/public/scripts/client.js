var app = angular.module('MovieApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/movie.html',
        controller: 'MovieController as vm'
    }).when('/addmovie', {
        templateUrl: '/views/addmovie.html',
        controller: 'AddMovieController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});