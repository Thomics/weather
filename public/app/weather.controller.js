(function() {
  'use strict';
  
  angular
    .module('weather')
    .controller('WeatherController', WeatherController);
  
  WeatherController.$inject = ['WeatherService', 'IconService'];
  
  function WeatherController(WeatherService, IconService) {

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

      vm.getCoordinates();

      vm.getWeather('Seattle');
      //vm.getForecast('Seattle');


    }

    function getCoordinates() {
      if ( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition(function(pos){
          console.log(pos);

          vm.coords.lat = pos.coords.latitude;
          vm.coords.long = pos.coords.longitude;

          console.log(vm.coords);
        });
      } else {
        alert('You blew it!');
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
          vm.time = new Date().getHours();
          vm.icon = IconService.getIcon(data.weather[0].id, vm.time);

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
