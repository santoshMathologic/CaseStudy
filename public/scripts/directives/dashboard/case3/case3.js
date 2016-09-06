'use strict';
angular.module('caseStudyApp')
  .directive('case3', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/case3.tmpl.html',
      restrict: 'E',
      replace: true,
      scope: {},
      controller: function ($scope, $state, $window, $log, $q, $anchorScroll, $timeout, $location, $http) {

        $scope.shippingList = [];
        $scope.query = {
          limit: 100,
          page: 1,
          order: "sourceZip"
        }

        $scope.currentPage=1;
$scope.itemsPerPage=10;

        $scope.users = []; //declare an empty array
        $http.get("customJson/shipping.json").success(function (response) {
          $scope.users = response;  //ajax request to fetch data into $scope.data
        });


        var apishipping = "http://localhost:3000/api/v1/shipping"
        $scope.getShipping = function () {
          $http.get(apishipping, { params: $scope.query }).then(function (response) {
            $scope.shippingList = response.data.results;
            $scope.currentPage = response.data.current;
            $scope.perPage = response.data.options.perPage;
            $scope.totalPages = response.data.last;
            $scope.totalRecords = response.data.count;

          })
        }
        $scope.getShipping();

        $scope.sort = function (keyname) {
          $scope.sortKey = keyname;   //set the sortKey to the param passed
          $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }




      }
    }
  }]);
