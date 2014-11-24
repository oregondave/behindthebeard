"use strict";

proto.controller('eventTrackerController',
	function eventTrackerController($scope, $route, eventListingData, titleData, csrData, commsData) {

		$scope.eventListings = eventListingData.getData();
		$scope.titleData = titleData.getData();
		$scope.csrList = csrData.getData();
		$scope.comms = commsData.getData();
		$scope.index = $route.current.params.index;

		$scope.tabs = [
	    { title:"Dynamic Title 1", content:"Dynamic content 1" },
	    { title:"Dynamic Title 2", content:"Dynamic content 2" }
	  ];

	  $scope.alertMe = function() {
	    setTimeout(function() {
	      alert("You've selected the alert tab!");
	    });
	  };

	}
);

