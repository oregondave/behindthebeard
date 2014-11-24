'use strict';

var proto = angular.module('proto', [
	'ngSanitize',
	'ngResource',
	'ngRoute',
  'xeditable',
  'mm.foundation'
]).

config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/home',
  	{
  		templateUrl: 'partials/home/home.html',
  		controller: 'homeController'
  	});
  $routeProvider.when('/renewalSearch',
    {
      templateUrl: 'partials/renewals/renewalSearch.html',
      controller: 'renewalsController'
    });
  $routeProvider.when('/renewalDetailsNew',
    {
      templateUrl: 'partials/renewals/renewalDetailsNew.html',
      controller: 'renewalsController'
    });
  $routeProvider.when('/renewalDocs',
    {
      templateUrl: 'partials/renewals/renewalDocs.html',
      controller: 'renewalsController'
    });
  $routeProvider.when('/renewalsManager',
    {
      templateUrl: 'partials/renewals/renewalsManager.html',
      controller: 'renewalsController'
    });
  $routeProvider.when('/titleDetail',
    {
      templateUrl: 'partials/renewals/titleDetail.html',
      controller: 'renewalsController'
    });
  $routeProvider.when('/titleDetailEdit',
    {
      templateUrl: 'partials/renewals/titleDetailEdit.html',
      controller: 'renewalsController'
    });
  $routeProvider.when('/customerAuthority',
    {
      templateUrl: 'partials/customerauthority/customerauthority.html',
      controller: 'renewalsController'
    });
  $routeProvider.when('/eventDetail',
    {
      templateUrl: 'partials/eventTracker/eventDetail.html',
      controller: 'eventTrackerController'
    });
  $routeProvider.when('/eventListing',
    {
      templateUrl: 'partials/eventTracker/eventListing.html',
      controller: 'eventTrackerController'
    });
  $routeProvider.when('/eventListingAdmin',
    {
      templateUrl: 'partials/eventTracker/eventListingAdmin.html',
      controller: 'eventTrackerController'
    });
  $routeProvider.when('/commDetail',
    {
      templateUrl: 'partials/eventTracker/commDetail.html',
      controller: 'eventTrackerController'
    });
  $routeProvider.when('/color',
    {
      templateUrl: 'partials/renewals/color.html',
      controller: 'renewalsController'
    });


  $routeProvider.otherwise({redirectTo: '/home'});


}]);



