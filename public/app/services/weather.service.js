
(function() {
  'use strict';
  
  angular
    .module('weather')
    .service('WeatherService', WeatherService);
  
  WeatherService.$inject = ['$http'];
  
  function WeatherService($http) {

    var vm = this;

    vm.getWeather = getWeather;
    vm.getWeatherByID = getWeatherByID;


    function getWeather(city) {
      return $http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + ",us&appid=b1b15e88fa797225412429c1c50c122a1&apikey=37aded37883e894c15de78755ecb3b6d&units=imperial");
    }

    function getWeatherByID(cities) {
      return $http.get('https://api.openweathermap.org/data/2.5/group?id=' + cities + "&appid=b1b15e88fa797225412429c1c50c122a1&apikey=37aded37883e894c15de78755ecb3b6d&units=imperial");
    }

  }

})();


