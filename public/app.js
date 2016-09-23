//
//
//function getWeather(city) {
//  return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ",us&appid=b1b15e88fa797225412429c1c50c122a1&apikey=37aded37883e894c15de78755ecb3b6d");
//}
//
//
//getWeather('seattle')
//  .success(function(data){
//    console.log(data);
//  }).error(function(err){
//    console.log(err);
//  });
//


$.ajax('http://api.openweathermap.org/data/2.5/weather?q=seattle,us&appid=b1b15e88fa797225412429c1c50c122a1&apikey=37aded37883e894c15de78755ecb3b6d&units=imperial', {
  data : '',
  type : 'GET',
  success : function ( res ) {
    console.log(res);
  }
});
