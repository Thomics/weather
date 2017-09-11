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
    vm.location = "Seattle";
    vm.locationPlaceholder = 'City Name';
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

          vm.weatherArr.push({
            temp: vm.temp,
            icon: vm.icon,
            location: vm.location
          });

          vm.locationPlaceholder = "Cities Name";

          console.log(vm.weatherArr);

          //vm.reset();



        }).error(function (err) {
          console.log(err);
        });
    }







  }


})();
