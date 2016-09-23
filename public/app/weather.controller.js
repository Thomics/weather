(function() {
  'use strict';
  
  angular
    .module('weather')
    .controller('WeatherController', WeatherController);
  
  WeatherController.$inject = ['WeatherService'];
  
  function WeatherController(WeatherService) {

    var vm = this;

    vm.getWeather = getWeather;

    vm.temp;
    vm.wind;

    vm.getWeather('seattle');

    function getWeather(city) {
      WeatherService.getWeather(city)
        .success(function (data) {
          console.log(data);
          vm.temp = data.main.temp;
          vm.wind = data.wind.speed;
        }).error(function (err) {
          console.log(err);
        });
    }

  }


})();
