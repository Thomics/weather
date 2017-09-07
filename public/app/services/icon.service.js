
(function() {
  'use strict';

  angular
    .module('weather')
    .service('IconService', IconService);

  IconService.$inject = [];

  function IconService() {

    var vm = this;

    vm.getIcon = getIcon;

    function getIcon(icon, time) {
      if ( time >= 6 && time <= 19 ) {
        return vm.weatherIcons[icon].daytime
      } else {
        return vm.weatherIcons[icon].nighttime;
      }

    }

    vm.weatherIcons = {
      //Thunderstorms
      '200': {'daytime': 'wi-storm-showers', 'nighttime': 'wi-night-alt-storm-showers'}, //thunderstorm with light rain
      '201': {'daytime': 'wi-storm-showers', 'nighttime': 'wi-night-alt-storm-showers'}, //thunderstorm with rain
      '202': {'daytime': 'wi-storm-showers', 'nighttime': 'wi-night-alt-storm-showers'}, //thunderstorm with heavy rain
      '210': {'daytime': 'wi-day-thunderstorm', 'nighttime': 'wi-night-alt-thunderstorm'}, //light thunderstorm
      '211': {'daytime': 'wi-day-thunderstorm', 'nighttime': 'wi-night-alt-thunderstorm'}, //thunderstorm
      '212': {'daytime': 'wi-day-thunderstorm', 'nighttime': 'wi-night-alt-thunderstorm'}, //heavy thunderstorm
      '221': {'daytime': 'wi-day-thunderstorm', 'nighttime': 'wi-night-alt-thunderstorm'}, //ragged thunderstorm
      '230': {'daytime': 'wi-day-storm-showers', 'nighttime': 'wi-night-alt-sleet-storm'}, //thunderstorm with light drizzle
      '231': {'daytime': 'wi-day-storm-showers', 'nighttime': 'wi-night-alt-sleet-storm'}, //thunderstorm with drizzle
      '232': {'daytime': 'wi-day-storm-showers', 'nighttime': 'wi-night-alt-sleet-storm'}, //thunderstorm with heavy drizzle
      //Drizzle
      '300': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle'}, //light intensity drizzle
      '301': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle'}, //drizzle
      '302': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle'}, //heavy intensity drizzle
      '310': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle'}, //light intensity drizzle rain
      '311': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle'}, //drizzle rain
      '312': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle'}, //heavy intensity drizzle rain
      '313': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle'}, //shower rain and drizzle
      '314': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle'}, //heavy shower rain and drizzle
      '321': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle'}, //shower drizzle
      //Rain
      '500': {'daytime': 'wi-day-rain', 'nighttime': 'wi-night-alt-rain'}, //light rain
      '501': {'daytime': 'wi-day-rain', 'nighttime': 'wi-night-alt-rain'}, //moderate rain
      '502': {'daytime': 'wi-day-rain-wind', 'nighttime': 'wi-night-alt-rain-wind'}, //heavy intensity rain
      '503': {'daytime': 'wi-day-rain-wind', 'nighttime': 'wi-night-alt-rain-wind'}, //very heavy rain
      '504': {'daytime': 'wi-day-rain-wind', 'nighttime': 'wi-night-alt-rain-wind'}, //extreme rain
      '511': {'daytime': 'wi-day-rain-wind', 'nighttime': 'wi-night-alt-rain-wind'}, //freezing rain
      '520': {'daytime': 'wi-day-rain', 'nighttime': 'wi-night-alt-rain'}, //light intensity shower rain
      '521': {'daytime': 'wi-day-rain', 'nighttime': 'wi-night-alt-rain'}, //shower rain
      '522': {'daytime': 'wi-day-rain-wind', 'nighttime': 'wi-night-alt-rain-wind'}, //heavy intensity shower rain
      '531': {'daytime': 'wi-day-rain-wind', 'nighttime': 'wi-night-alt-rain-wind'}, //ragged shower rain
      //Snow
      '600': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow'}, //light snow
      '601': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow'}, //snow
      '602': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow'}, //heavy snow
      '611': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow'}, //sleet
      '612': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow'}, //shower sleet
      '615': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow'}, //light rain and snow
      '616': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow'}, //rain and snow
      '620': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow'}, //light shower snow
      '621': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow'}, //shower snow
      '622': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow'}, //heavy shower snow
      '711': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow'}, //heavy shower snow
      //Clear/Clear
      '800': {'daytime': 'wi-day-sunny', 'nighttime': 'wi-night-clear'}, //clear
      '801': {'daytime': 'wi-day-cloudy', 'nighttime': 'wi-night-alt-cloudy'}, //few clouds
      '802': {'daytime': 'wi-day-cloudy', 'nighttime': 'wi-night-alt-cloudy'}, //scattered clouds
      '803': {'daytime': 'wi-day-cloudy', 'nighttime': 'wi-night-alt-cloudy'}, //broken clouds
      '804': {'daytime': 'wi-cloudy', 'nighttime': 'wi-cloudy'} //overcast clouds

    };




  }

})();


/*Implement in the future
701	mist
711	smoke
721	haze
731	sand, dust whirls
741	fog
751	sand
761	dust
762	volcanic ash
771	squalls
781	tornado

900	tornado
901	tropical storm
902	hurricane
903	cold
904	hot
905	windy
906	hail

951	calm
952	light breeze
953	gentle breeze
954	moderate breeze
955	fresh breeze
956	strong breeze
957	high wind, near gale
958	gale
959	severe gale
960	storm
961	violent storm
962	hurricane
*/