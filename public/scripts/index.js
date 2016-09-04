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
    'toggle-switch'
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
      })

  }]);


