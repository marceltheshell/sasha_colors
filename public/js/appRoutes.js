angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: 'views/newReport.html', controller: 'NewReportCtrl'}); 
    $routeProvider.when('/newReport', {templateUrl: 'views/newReport.html', controller: 'NewReportCtrl'}); 
    $routeProvider.when('/calendar', {templateUrl: 'views/calendar.html', controller: 'CalendarCtrl'});
    $locationProvider.html5Mode(true);
}]);