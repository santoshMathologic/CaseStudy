'use strict';
angular.module('caseStudyApp')
  .directive('case2', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/case2.tmpl.html',
      restrict: 'E',
      replace: true,
      scope: {},
      controller: function ($scope, $state, $window, $log, $q, $anchorScroll, $timeout, $location, $http) {


        /* $scope.typeLists = [{ "positionname": "Pitcher" },
           { "positionname": "Shooting guard" },
           { "positionname": "Small forward" },
           { "positionname": "Power forward" },
           { "positionname": "Center" },
           { "positionname": "Point Guard" }
 
         ]
 */
        $scope.typeLists = [];
        $scope.query = {
          limit: 10,
          page: 1,
          order: "positionName"
        }



        var apipos = "http://localhost:3000/api/v1/positions"
        $scope.getPosition = function () {
          $http.get(apipos, { params: $scope.query }).then(function (response) {
            $scope.typeLists = response.data.results;
            $scope.sportType = $scope.typeLists[5];

          })
        }
        $scope.getPosition();

       





      }
    }
  }]);
