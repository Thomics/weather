(function() {
  'use strict';
  
  angular
    .module('weather')
    .controller('WeatherController', WeatherController);
  
  WeatherController.$inject = ['WeatherService'];
  
  function WeatherController(WeatherService) {

    var vm = this;

    vm.getCoordinates = getCoordinates;
    vm.getForecast = getForecast;
    vm.getWeather = getWeather;

    vm.forecast = [];
    vm.coords = {};
    vm.temp;
    vm.wind;

    activate();

    function activate() {

      vm.getWeather('Seattle');
      vm.getForecast('Seattle');
      console.log(vm.forecast);

      vm.getCoordinates();

    }

    function getCoordinates() {
      if ( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition(function(pos){
          console.log(pos);

          vm.coords.lat = pos.latitude;
          vm.coords.long = pos.longitude;

        });
      } else {
        alert('you blew it');
      }
    }

    function getForecast(city) {
      WeatherService.getForecast(city)
        .success(function (data) {
          console.log(data);
          vm.forecast = generateForecast(data.list);
        }).error(function (err) {
          console.log(err);
        });
    }


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


    function generateForecast(arr) {
      var forecast = [];
      for ( var i = 0; i < arr.length; i++ ) {
        forecast.push(
          {
            time: arr[i].dt_txt,
            temp: arr[i].main.temp
          });
      }
      console.log(forecast);
      return forecast;
    }

  }


})();
