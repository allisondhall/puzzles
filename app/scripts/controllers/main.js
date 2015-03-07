'use strict';

/**
 * @ngdoc function
 * @name puzzlesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the puzzlesApp
 */
angular.module('puzzlesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
