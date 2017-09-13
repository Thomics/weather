
(function() {
  'use strict';

  angular
    .module('weather')
    .service('IconService', IconService);

  IconService.$inject = [];

  function IconService() {

    var vm = this;

    vm.getIcon = getIcon;
    vm.getWeatherType = getWeatherType;

    function getIcon(icon, time) {
      if ( time >= 6 && time <= 19 ) {
        return vm.weatherIcons[icon].daytime
      } else {
        return vm.weatherIcons[icon].nighttime;
      }
    }

    function getWeatherType(icon) {
      console.log(vm.weatherIcons[icon].icon);
      return vm.weatherIcons[icon].icon;
    }

    vm.weatherIcons = {

      //Thunderstorms
      '200': {'daytime': 'wi-storm-showers', 'nighttime': 'wi-night-alt-storm-showers', icon: 'Thunderstorm with light rain'}, //thunderstorm with light rain
      '201': {'daytime': 'wi-storm-showers', 'nighttime': 'wi-night-alt-storm-showers', icon: 'Thunderstorm with rain'}, //thunderstorm with rain
      '202': {'daytime': 'wi-storm-showers', 'nighttime': 'wi-night-alt-storm-showers', icon: 'Thunderstorm with heavy rain'}, //thunderstorm with heavy rain
      '210': {'daytime': 'wi-day-thunderstorm', 'nighttime': 'wi-night-alt-thunderstorm', icon: 'Light thunderstorm'}, //light thunderstorm
      '211': {'daytime': 'wi-day-thunderstorm', 'nighttime': 'wi-night-alt-thunderstorm', icon: 'Thunderstorm'}, //thunderstorm
      '212': {'daytime': 'wi-day-thunderstorm', 'nighttime': 'wi-night-alt-thunderstorm', icon: 'Heavy thunderstorm'}, //heavy thunderstorm
      '221': {'daytime': 'wi-day-thunderstorm', 'nighttime': 'wi-night-alt-thunderstorm', icon: 'Ragged thunderstorm'}, //ragged thunderstorm
      '230': {'daytime': 'wi-day-storm-showers', 'nighttime': 'wi-night-alt-sleet-storm', icon: 'Thunderstorm with light drizzle'}, //thunderstorm with light drizzle
      '231': {'daytime': 'wi-day-storm-showers', 'nighttime': 'wi-night-alt-sleet-storm', icon: 'Thunderstorm with drizzle'}, //thunderstorm with drizzle
      '232': {'daytime': 'wi-day-storm-showers', 'nighttime': 'wi-night-alt-sleet-storm', icon: 'Thunderstorm with heavy drizzle'}, //thunderstorm with heavy drizzle
      //Drizzle
      '300': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle', icon: 'light intensity drizzle'}, //light intensity drizzle
      '301': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle', icon: 'drizzle'}, //drizzle
      '302': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle', icon: 'heavy intensity drizzle'}, //heavy intensity drizzle
      '310': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle', icon: 'light intensity drizzle rain'}, //light intensity drizzle rain
      '311': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle', icon: 'drizzle rain'}, //drizzle rain
      '312': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle', icon: 'heavy intensity drizzle rain'}, //heavy intensity drizzle rain
      '313': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle', icon: 'shower rain and drizzle'}, //shower rain and drizzle
      '314': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle', icon: 'heavy shower rain and drizzle'}, //heavy shower rain and drizzle
      '321': {'daytime': 'wi-day-sprinkle', 'nighttime': 'wi-night-alt-sprinkle', icon: 'shower drizzle'}, //shower drizzle
      //Rain
      '500': {'daytime': 'wi-day-rain', 'nighttime': 'wi-night-alt-rain', icon: 'light rain'}, //light rain
      '501': {'daytime': 'wi-day-rain', 'nighttime': 'wi-night-alt-rain', icon: 'moderate rain'}, //moderate rain
      '502': {'daytime': 'wi-day-rain-wind', 'nighttime': 'wi-night-alt-rain-wind', icon: 'heavy intensity rain'}, //heavy intensity rain
      '503': {'daytime': 'wi-day-rain-wind', 'nighttime': 'wi-night-alt-rain-wind', icon: 'very heavy rain'}, //very heavy rain
      '504': {'daytime': 'wi-day-rain-wind', 'nighttime': 'wi-night-alt-rain-wind', icon: 'extreme rain'}, //extreme rain
      '511': {'daytime': 'wi-day-rain-wind', 'nighttime': 'wi-night-alt-rain-wind', icon: 'freezing rain'}, //freezing rain
      '520': {'daytime': 'wi-day-rain', 'nighttime': 'wi-night-alt-rain', icon: 'light intensity shower rain'}, //light intensity shower rain
      '521': {'daytime': 'wi-day-rain', 'nighttime': 'wi-night-alt-rain', icon: 'shower rain'}, //shower rain
      '522': {'daytime': 'wi-day-rain-wind', 'nighttime': 'wi-night-alt-rain-wind', icon: 'heavy intensity shower rain'}, //heavy intensity shower rain
      '531': {'daytime': 'wi-day-rain-wind', 'nighttime': 'wi-night-alt-rain-wind', icon: 'ragged shower rain'}, //ragged shower rain
      //Snow
      '600': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow', icon: 'light snow'}, //light snow
      '601': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow', icon: 'snow'}, //snow
      '602': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow', icon: 'heavy snow'}, //heavy snow
      '611': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow', icon: 'sleet'}, //sleet
      '612': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow', icon: 'shower sleet'}, //shower sleet
      '615': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow', icon: 'ight rain and snow'}, //light rain and snow
      '616': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow', icon: 'rain and snow'}, //rain and snow
      '620': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow', icon: 'light shower snow'}, //light shower snow
      '621': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow', icon: 'shower snow'}, //shower snow
      '622': {'daytime': 'wi-day-snow-wind', 'nighttime': 'wi-night-alt-snow', icon: 'heavy shower snow'}, //heavy shower snow
      //Hazardous Weather
      '701': {'daytime': 'wi-raindrops', 'nighttime': 'wi-raindrops', icon: 'Mist'}, //Mist
      '711': {'daytime': 'wi-smoke', 'nighttime': 'wi-smoke', icon: 'Smoke'}, //Smoke
      '721': {'daytime': 'wi-day-haze', 'nighttime': 'wi-windy', icon: 'Haze'}, //Haze
      '731': {'daytime': 'wi-dust', 'nighttime': 'wi-dust', icon: 'sand, dust whirls'}, //sand, dust whirls
      '741': {'daytime': 'wi-day-fog', 'nighttime': 'wi-night-fog', icon: 'fog'}, //fog
      '751': {'daytime': 'wi-sandstorm', 'nighttime': 'wi-sandstorm', icon: 'sand'}, //sand
      '761': {'daytime': 'wi-dust', 'nighttime': 'wi-dust', icon: 'dust'}, //dust
      '762': {'daytime': 'wi-volcano', 'nighttime': 'wi-volcano', icon: 'volcanic ash'}, //volcanic ash
      '771': {'daytime': 'wi-tsunami', 'nighttime': 'wi-tsunami', icon: 'squalls'}, //squalls
      '781': {'daytime': 'wi-tornado', 'nighttime': 'wi-tornado', icon: 'tornado'}, //tornado
      //Clear
      '800': {'daytime': 'wi-day-sunny', 'nighttime': 'wi-night-clear', icon: 'clear'}, //clear
      '801': {'daytime': 'wi-day-cloudy', 'nighttime': 'wi-night-alt-cloudy', icon: 'few clouds'}, //few clouds
      '802': {'daytime': 'wi-day-cloudy', 'nighttime': 'wi-night-alt-cloudy', icon: 'scattered clouds'}, //scattered clouds
      '803': {'daytime': 'wi-day-cloudy', 'nighttime': 'wi-night-alt-cloudy', icon: 'broken clouds'}, //broken clouds
      '804': {'daytime': 'wi-cloudy', 'nighttime': 'wi-cloudy', icon: 'overcast clouds'}, //overcast clouds
      //Chaos
      '900': {'daytime': 'wi-tornado', 'nighttime': 'wi-tornado', icon: 'tornado'}, //tornado
      '901': {'daytime': 'wi-tsunami', 'nighttime': 'wi-tsunami', icon: 'ropical storm'}, //ropical storm
      '902': {'daytime': 'wi-hurricane', 'nighttime': 'wi-hurricane', icon: 'hurricane'}, //hurricane
      '903': {'daytime': 'wi-thermometer', 'nighttime': 'wi-thermometer', icon: 'cold'}, //cold
      '904': {'daytime': 'wi-thermometer', 'nighttime': 'wi-thermometer', icon: 'hot'}, //hot
      '905': {'daytime': 'wi-windy', 'nighttime': 'wi-windy', icon: 'windy'}, //windy
      '906': {'daytime': 'wi-day-hail', 'nighttime': 'wi-night-alt-hail', icon: 'hail'}, //hail
      '951': {'daytime': 'wi-sunrise', 'nighttime': 'wi-moonrise', icon: 'calm'}, //calm
      '952': {'daytime': 'wi-windy', 'nighttime': 'wi-windy', icon: 'light breeze'}, //light breeze
      '953': {'daytime': 'wi-windy', 'nighttime': 'wi-windy', icon: 'gentle breeze'}, //gentle breeze
      '954': {'daytime': 'wi-windy', 'nighttime': 'wi-windy', icon: 'moderate breeze'}, //moderate breeze
      '955': {'daytime': 'wi-windy', 'nighttime': 'wi-windy', icon: 'fresh breeze'}, //fresh breeze
      '956': {'daytime': 'wi-windy', 'nighttime': 'wi-windy', icon: 'strong breeze'}, //strong breeze
      '957': {'daytime': 'wi-strong-wind', 'nighttime': 'wi-strong-wind', icon: 'high wind, near gale'}, //high wind, near gale
      '958': {'daytime': 'wi-strong-wind', 'nighttime': 'wi-strong-wind', icon: 'gale'}, //gale
      '959': {'daytime': 'wi-strong-wind', 'nighttime': 'wi-strong-wind', icon: 'severe gale'}, //severe gale
      '960': {'daytime': 'wi-day-storm-showers', 'nighttime': 'wi-day-storm-showers', icon: 'storm'}, //storm
      '961': {'daytime': 'wi-day-storm-showers', 'nighttime': 'wi-day-storm-showers', icon: 'violent storm'}, //violent storm
      '962': {'daytime': 'wi-hurricane', 'nighttime': 'wi-hurricane', icon: 'hurricane'} //hurricane

    };

  }

})();
