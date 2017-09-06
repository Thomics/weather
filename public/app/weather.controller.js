(function() {
  'use strict';
  
  angular
    .module('weather')
    .controller('WeatherController', WeatherController);
  
  WeatherController.$inject = ['WeatherService', 'IconService'];
  
  function WeatherController(WeatherService, IconService) {

    var vm = this;

    vm.coords = {};
    vm.description;
    vm.forecast = [];
    vm.getCoordinates = getCoordinates;
    vm.getForecast = getForecast;
    vm.getWeather = getWeather;
    vm.icon;
    vm.location = "Seattle";
    vm.temp;
    vm.wind;
    vm.lat;
    vm.lon;

    activate();

    function activate() {
      vm.getWeather(vm.location);
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
          console.log(data.coord);

          vm.temp = data.main.temp;
          vm.wind = data.wind.speed;
          vm.time = new Date().getHours();
          vm.icon = IconService.getIcon(data.weather[0].id, vm.time);
          vm.description = data.weather[0].description;
          vm.lat = data.coord.lat;
          vm.lon = data.coord.lon;
          vm.humidity = data.main.humidity;
          vm.tempMax = data.main.temp_max;
          vm.tempMin = data.main.temp_min;

          console.log(vm.tempMax);
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
