'use strict';

/**
 * Creates the component display for adding a location form
 * @display
 **/

angular.module('weather')
  .directive('waAddLocation', function(){
    return {
      templateUrl: 'public/app/components/addLocation/waAddLocation.html',
      controller: 'WeatherController'
    };
  });
