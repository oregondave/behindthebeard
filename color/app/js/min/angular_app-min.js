"use strict";var proto=angular.module("proto",["ngSanitize","ngResource","ngRoute","xeditable","mm.foundation"]).config(["$routeProvider",function(e,l){e.when("/home",{templateUrl:"partials/home/home.html",controller:"homeController"}),e.when("/renewalSearch",{templateUrl:"partials/renewals/renewalSearch.html",controller:"renewalsController"}),e.when("/renewalDetailsNew",{templateUrl:"partials/renewals/renewalDetailsNew.html",controller:"renewalsController"}),e.when("/renewalDocs",{templateUrl:"partials/renewals/renewalDocs.html",controller:"renewalsController"}),e.when("/renewalsManager",{templateUrl:"partials/renewals/renewalsManager.html",controller:"renewalsController"}),e.when("/titleDetail",{templateUrl:"partials/renewals/titleDetail.html",controller:"renewalsController"}),e.when("/titleDetailEdit",{templateUrl:"partials/renewals/titleDetailEdit.html",controller:"renewalsController"}),e.when("/customerAuthority",{templateUrl:"partials/customerauthority/customerauthority.html",controller:"renewalsController"}),e.when("/eventDetail",{templateUrl:"partials/eventTracker/eventDetail.html",controller:"eventTrackerController"}),e.when("/eventListing",{templateUrl:"partials/eventTracker/eventListing.html",controller:"eventTrackerController"}),e.when("/eventListingAdmin",{templateUrl:"partials/eventTracker/eventListingAdmin.html",controller:"eventTrackerController"}),e.when("/commDetail",{templateUrl:"partials/eventTracker/commDetail.html",controller:"eventTrackerController"}),e.when("/color",{templateUrl:"partials/renewals/color.html",controller:"renewalsController"}),e.otherwise({redirectTo:"/home"})}]);