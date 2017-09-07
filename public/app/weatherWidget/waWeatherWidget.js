'use strict';

/**
 * Creates the display for component of weatherWidget widget
 * @display
 **/

console.log('hi');

angular.module('weather')
  .directive('waWeatherWidget', function(){
    return {
      templateUrl: 'public/app/weatherWidget/waWeatherWidget.html',
      controller: 'WeatherController',
      controllerAs: 'weatherWidget'
    };
  });
