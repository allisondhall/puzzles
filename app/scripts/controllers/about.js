'use strict';

/**
 * @ngdoc function
 * @name puzzlesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the puzzlesApp
 */
angular.module('puzzlesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
