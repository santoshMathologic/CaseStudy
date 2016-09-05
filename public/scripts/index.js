'use strict';

var initInjector = angular.injector(['ng']);
var $http = initInjector.get('$http');

angular
  .module('caseStudyApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'ngSanitize',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'toggle-switch',
    'angularUtils.directives.dirPagination'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
    });


    //
    $urlRouterProvider.otherwise('/dashboard/home');



    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
          loadMyDirectives: function ($ocLazyLoad) {
            return $ocLazyLoad.load(
              {
                name: 'caseStudyApp',
                files: [

                ]
              })
           }
        }
      })

      .state('dashboard.home', {
        url: '/home',
        templateUrl: 'views/dashboard/home.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'caseStudyApp',
              files: [
    
              ]
            })
          }
        }
      }) .state('dashboard.case1', {
        url: '/case1',
        controller: 'case1Ctrl',
        templateUrl: 'scripts/directives/dashboard/case1/case1.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'caseStudyApp',
              files: [
                'scripts/controllers/case1.js',
                'scripts/directives/dashboard/case1/case1.js',
              ]
            })
          }
        }
      }).state('dashboard.case2', {
        url: '/case2',
        controller: 'case2Ctrl',
        templateUrl: 'scripts/directives/dashboard/case2/case2.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'caseStudyApp',
              files: [
                'scripts/controllers/case2.js',
                'scripts/directives/dashboard/case2/case2.js',
              ]
            })
          }
        }
      }).state('dashboard.case3', {
        url: '/case3',
        controller: 'case3Ctrl',
        templateUrl: 'scripts/directives/dashboard/case3/case3.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'caseStudyApp',
              files: [
                'scripts/controllers/case3.js',
                'scripts/directives/dashboard/case3/case3.js',
              ]
            })
          }
        }
      })





  }]);


