'use strict';

/**
 * Creates the display for component of default 'find location' widget.
 * @display
 **/

angular.module('weather')
  .directive('waWelcomeWidget', function(){
    return {
      templateUrl: 'public/app/components/welcomeWidget/waWelcomeWidget.html',
      controller: 'WeatherController'
    };
  });
