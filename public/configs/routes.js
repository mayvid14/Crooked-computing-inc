app.config(function ($routeProvider) {
    $routeProvider.when('/content', {
        templateUrl: '../views/content.html'
    }).when('/theteam', {
        templateUrl: '../views/theteam.html'
    }).when('/workwithus', {
        templateUrl: '../views/workwithus.html'
    })
})