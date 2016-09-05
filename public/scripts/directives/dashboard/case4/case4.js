'use strict';
angular.module('caseStudyApp').directive('case4', ['$location', function () {
    return {
        templateUrl: 'views/dashboard/case4.tmpl.html',
        restrict: 'E',
        replace: true,
        scope: {},
        controller: function ($scope, $state, $timeout, $location, $http) {


            $scope.login = function () {
                console.log("" + $scope.username);


            }




        }

    }







}]);