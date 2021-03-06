'use strict';
angular.module('caseStudyApp')
  .directive('case', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/case1.tmpl.html',
      restrict: 'E',
      replace: true,
      scope: {},
      controller: function ($scope, $state, $window, $log, $q, $anchorScroll, $timeout, $location, $http) {


        $scope.tabs = [
          { title: "Wall", content: 'This is a default tab on load' },
          { title: "Info", content: 'This is a Info tab on load' },
          { title: "Photo", content: 'This is a Photo tab on load' },
          { title: "Boxes", content: 'This is a Boxes tab on load' },

        ]

        $scope.counter = 1;

        $scope.addTab = function () {
          $scope.counter++;
          $scope.tabs.push({ title: "Demo" + $scope.counter, content: 'Any Content' });
          $scope.selectedTab = $scope.tabs.length - 1; //set the newly added tab active. 
        }


        $scope.deleteTab = function (index) {
          $scope.tabs.splice(index, 1);
        }

        $scope.selectedTab = 0;


        $scope.selectTab = function (index) {
          $scope.selectedTab = index;
        }



        ////  faceboox implement

        $scope.userInformation = [
          {
            "name": "Jami Wolf",
            "description": "aww im so sorry to hear abour carter : ( and i hope everthing gets better !!! i am gonna be in kansas all of joly so you should for sure plan a trip",
            "sendtime": "Tues 7:45pm",
            "userPics": "assests/download.jpg"
          },
          {
            "name": "Molly Hartman", 
            "description": "Are Your back for Summer Yet ?",
            "sendtime": "Tues 7:45pm",
            "userPics": "assests/download.jpg"
          },
          {
            "name": "Laura Sulkin", "description": "Come visit Lawrence ?",
            "sendtime": "Tues 7:45pm",
            "userPics": "assests/download.jpg"
          },
          {
            "name": "Jammi Wolf",
            "description": "Hey etthan !! How is your summer Going on  ? I miss You",
            "sendtime": "Tues 7:45pm",
            "userPics": "assests/download.jpg"
          },

        ]




      }
    }
  }]);
