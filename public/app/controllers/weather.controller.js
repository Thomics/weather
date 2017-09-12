(function() {
  'use strict';
  
  angular
    .module('weather')
    .controller('WeatherController', WeatherController);
  
  WeatherController.$inject = ['WeatherService', 'IconService'];
  
  function WeatherController(WeatherService, IconService) {

    var vm = this;

    vm.getWeather = getWeather;
    vm.updateWeather = updateWeather;
    vm.deleteLocation = deleteLocation;
    vm.icon;
    vm.id;
    vm.weatherType;
    vm.location = "Seattle";
    vm.locationArr = [];
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
          vm.id = data.id;


          vm.weatherArr.push({
            location: vm.location,
            id: vm.id,
            temp: vm.temp,
            icon: vm.icon,
            weatherType: vm.weatherType
          });

          vm.locationArr.push(vm.id);


        }).error(function (err) {
          console.log(err);
        });
    }


    function updateWeather() {

      var locationIDs = vm.locationArr.join(',');

      WeatherService.getWeatherByID(locationIDs)
        .success(function (data) {

          console.log(data);
          var tempWeatherArr = [];

          for ( var i = 0; i < data.list.length; i++ ) {


            tempWeatherArr.push({
              location: data.list[i].name,
              id: data.list[i].id,
              temp: data.list[i].main.temp,
              icon: IconService.getIcon(data.list[i].weather[0].id, vm.time), //Update time to be local time
              weatherType: IconService.getWeatherType(data.list[i].weather[0].id)
            });

          }

          console.log(tempWeatherArr);

          vm.weatherArr = tempWeatherArr;


        }).error(function (err) {
          console.log(err);
        });


    }

    function deleteLocation(location) {

      var tempWeatherArr = vm.weatherArr.filter(function( obj ) {
        return obj.location !== location;
      });

      console.log(tempWeatherArr);
      vm.weatherArr = tempWeatherArr;

    }

  }


})();
