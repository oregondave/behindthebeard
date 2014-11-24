"use strict";

proto.controller('renewalsController',
	function renewalsController($scope, $filter, $route, orderData, customerData, customerDetailsData, csrData, renewalsData, statesData, countriesData, CCIData, CCILinesData, renewalDocsData) {

    $scope.orders = orderData.getData();
		$scope.customers = customerData.getData();
    $scope.customerDetails = customerDetailsData.getData();
		$scope.csr = csrData.getData();
		$scope.renewals = renewalsData.getData();
		$scope.states = statesData.getData();
		$scope.countries = countriesData.getData();
		$scope.CCI = CCIData.getData();
    $scope.CCILines = CCILinesData.getData();
		$scope.renewalDocs = renewalDocsData.getData();
		$scope.index = $route.current.params.index;

		// $scope.showStatus = function() {
	 //    var selected = $filter('filter')($scope.renewals, {value: $scope.renewals.renew});
	 //    return ($scope.renewals.renew);
	 //  };

	  // $scope.list = [{
   //      status: 2
   //  }, {
   //      status: 3
   //  }, {
   //      status: 4
   //  }];

   //  $scope.statuses = [{
   //      value: 1,
   //      text: 'status1'
   //  }, {
   //      value: 2,
   //      text: 'status2'
   //  }, {
   //      value: 3,
   //      text: 'status3'
   //  }, {
   //      value: 4,
   //      text: 'status4'
   //  }];

	  $scope.repeatFiller = function (status) {
        var selected = $filter('filter')($scope.renewals.statusOptions, {
            value: status
        });
        return (status && selected.length) ? selected[0].text : 'Not set';
    };

    $scope.repeatFillerCustomer = function (status) {
        var selected = $filter('filter')($scope.customers.statusOptions, {
            value: status
        });
        return (status && selected.length) ? selected[0].text : 'Not set';
    };

     $scope.sort = {
            column: '',
            descending: false
        };
        $scope.changeSorting = function(column) {

            var sort = $scope.sort;

            if (sort.column == column) {
                sort.descending = !sort.descending;
            } else {
                sort.column = column;
                sort.descending = false;
            }
        };
	}
);

