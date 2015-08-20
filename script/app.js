/*ar angularApp = angular.module("dailyApp", []);
*/
var activeGoals = [
    {
        title: "Test!",
        description: "testing",
        completed: false
    },
    {
        title: "Buy stuff",
        description: "buy, milk, sugar, eggs",
        completed: false
    },
    {
        title: "Exercise",
        description: "Bröst/Rygg träningspass!",
        completed: false
    }
];


   


var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('cyan')
    .accentPalette('blue')
});
app.config(function($mdIconProvider){
   $mdIconProvider.defaultIconSet("assets/svg/avatars.svg", 128); 
});

app.config(function($routeProvider){
   $routeProvider
   .when('/', {
       templateUrl: 'pages/home.html',
       controller: 'homeCtrl'
   })
   
   .when('/daily', {
       templateUrl: 'pages/daily.html',
       controller: 'dailyController'
   })
   
   .when('/profile', {
       templateUrl: 'pages/profile.html',
       controller: 'profileController'
   })
   
   .otherwise({
       redirectTo: '/'
   });
});

// CONTROLLERS //////////////////////////////////

app.controller('homeCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function() {
    $mdSidenav('left').toggle();
  };
    
    $scope.title = "Welcome";
    
    $scope.dailyGoals = activeGoals;
 
}]);

app.controller('dailyController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function() {
    $mdSidenav('left').toggle();
  };
    
    $scope.title = "Daily goals";
    
    $scope.dailyGoals = activeGoals;
 
}]);

app.controller('profileController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function() {
    $mdSidenav('left').toggle();
  };
    
    $scope.title = "Profile";
    
    $scope.dailyGoals = activeGoals;
 
}]);







