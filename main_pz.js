$(function(){
    const ACCESS_KEY = "c9b7775ad9132bd82d3bf49cbd0af625";

    makeAPICall("https://api.openweathermap.org/data/2.5/weather?q=Vitebsk,by&units=metric&appid=" + ACCESS_KEY);

    // function getWether(){
    //    const result = 
    //    {"coord": { "lon": 139,"lat": 35},
    //    "weather": [
    //      {
    //        "id": 800,
    //        "main": "Clear",
    //        "description": "clear sky",
    //        "icon": "01n"
    //      }
    //    ],
    //    "base": "stations",
    //    "main": {
    //      "temp": 289.92,
    //      "pressure": 1009,
    //      "humidity": 92,
    //      "temp_min": 288.71,
    //      "temp_max": 290.93
    //    },
    //    "wind": {
    //      "speed": 0.47,
    //      "deg": 107.538
    //    },
    //    "clouds": {
    //      "all": 2
    //    },
    //    "dt": 1560350192,
    //    "sys": {
    //      "type": 3,
    //      "id": 2019346,
    //      "message": 0.0065,
    //      "country": "BY",
    //      "sunrise": 1560281377,
    //      "sunset": 1560333478
    //    },
    //    "timezone": 32400,
    //    "id": 1851632,
    //    "name": "Vitebsk",
    //    "cod": 200
    //  }
       
     //  return JSON.stringify(result);
  //  }

    function createTodayCard(response){      
   // const response = JSON.parse(getWether());

    const wetherFullData = {
        city: response.name,
        country: response.sys.country,
        time: response.dt,
        icon: "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png",
        iconDecription: response.weather[0].description,
        temperature: response.main.temp,
        wind: response.wind.speed,
        humidity: response.main.humidity,
        pressure: response.main.pressure
    }
    //$("<div>").text(JSON.stringify(wetherFullData)).appendTo("body");
    $(".local").append(wetherFullData.city);
    $(".local").append(", " + wetherFullData.country);

    $(".time").append(wetherFullData.time);

    $(".wether").html("<img src='" + wetherFullData.icon + "'>");
    $(".wether").append("<br>" + wetherFullData.iconDecription);

    $(".temperature").append(wetherFullData.temperature + " &deg; C");

    $(".infa").append("Wind: " + wetherFullData.wind + " kph");
    $(".infa").append("<br>" + "Humidity: " + wetherFullData.humidity);
    $(".infa").append("<br>" + "Pressure: " + wetherFullData.pressure + " mb");
 }

    
    function makeAPICall(url){
        $.ajax({
           dataType: "json",
           url: url,
           success: function (resp){
           createTodayCard(resp)
        },      
           error: function(err, status){
            //дейсмтвие если ошибка
           }
        });

    }    
});