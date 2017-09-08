(function() {
  'use strict';
  
  angular
    .module('weather')
    .controller('WeatherController', WeatherController);
  
  WeatherController.$inject = ['WeatherService', 'IconService', '$scope'];
  
  function WeatherController(WeatherService, IconService, $scope) {

    var vm = this;

    vm.getWeather = getWeather;
    vm.reset = reset;
    vm.icon;
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

          vm.weatherArr.push({
            temp: vm.temp,
            icon: vm.icon,
            location: vm.location
          });

          vm.location = '';

          $scope.locationForm.$setPristine(true);
          $scope.locationForm.$setUntouched(true);

        }).error(function (err) {
          console.log(err);
        });
    }

    function reset() {
      console.log('loc');
      vm.location = angular.copy('');
    }


  }


})();
