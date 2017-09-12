(function() {
  'use strict';
  
  angular
    .module('weather')
    .controller('WeatherController', WeatherController);
  
  WeatherController.$inject = ['WeatherService', 'IconService'];
  
  function WeatherController(WeatherService, IconService) {

    var vm = this;

    vm.getWeather = getWeather;
    vm.icon;
    vm.weatherType;
    vm.location = "Seattle";
    vm.weatherArr = [];

  //////////////////////////////////////////////////////////////////////////////////////////

    function getWeather(city) {
      WeatherService.getWeather(city)
        .success(function (data) {
          console.log(data);

          vm.temp = data.main.temp;
          vm.location = city;
          vm.time = new Date().getHours();
          vm.icon = IconService.getIcon(data.weather[0].id, vm.time);
          vm.weatherType = IconService.getWeatherType(data.weather[0].id);


          vm.weatherArr.push({
            location: vm.location,
            temp: vm.temp,
            icon: vm.icon,
            weatherType: vm.weatherType
          });


        }).error(function (err) {
          console.log(err);
        });
    }

  }


})();
