$(function () {
    ///https://openweathermap.org/forecast5
    const ACCESS_KEY = "c9b7775ad9132bd82d3bf49cbd0af625";

    makeAPICall("https://api.openweathermap.org/data/2.5/forecast?q=Vitebsk,by&units=metric&appid=" + ACCESS_KEY);

    // createWeekCard(getWether());
    // function getWether() {
    //     const result =
    //     {
    //         "city":
    //         {
    //             "id": 1851632,
    //             "name": "Shuzenji",
    //             "coord":
    //             {
    //                 "lon": 138.933334,
    //                 "lat": 34.966671
    //             },
    //             "country": "JP",
    //             "timezone": 32400,
    //             "cod": "200",
    //             "message": 0.0045,
    //             "cnt": 38,
    //             "list": [{
    //                 "dt": 1406106000,
    //                 "main": {
    //                     "temp": 298.77,
    //                     "temp_min": 298.77,
    //                     "temp_max": 298.774,
    //                     "pressure": 1005.93,
    //                     "sea_level": 1018.18,
    //                     "grnd_level": 1005.93,
    //                     "humidity": 87,
    //                     "temp_kf": 0.26
    //                 },
    //                 "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }],
    //                 "clouds": { "all": 88 },
    //                 "wind": { "speed": 5.71, "deg": 229.501 },
    //                 "sys": { "pod": "d" },
    //                 "dt_txt": "2014-07-23 09:00:00"
    //             },
    //             {
    //                 "dt": 1506106000,
    //                 "main": {
    //                     "temp": 298.77,
    //                     "temp_min": 298.77,
    //                     "temp_max": 298.774,
    //                     "pressure": 1005.93,
    //                     "sea_level": 1018.18,
    //                     "grnd_level": 1005.93,
    //                     "humidity": 87,
    //                     "temp_kf": 0.26
    //                 },
    //                 "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }],
    //                 "clouds": { "all": 88 },
    //                 "wind": { "speed": 5.71, "deg": 229.501 },
    //                 "sys": { "pod": "d" },
    //                 "dt_txt": "2014-07-23 09:00:00"
    //             },
    //             {
    //                 "dt": 1606106000,
    //                 "main": {
    //                     "temp": 298.77,
    //                     "temp_min": 298.77,
    //                     "temp_max": 298.774,
    //                     "pressure": 1005.93,
    //                     "sea_level": 1018.18,
    //                     "grnd_level": 1005.93,
    //                     "humidity": 87,
    //                     "temp_kf": 0.26
    //                 },
    //                 "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }],
    //                 "clouds": { "all": 88 },
    //                 "wind": { "speed": 5.71, "deg": 229.501 },
    //                 "sys": { "pod": "d" },
    //                 "dt_txt": "2014-07-23 09:00:00"
    //             },
    //             {
    //                 "dt": 1706106000,
    //                 "main": {
    //                     "temp": 298.77,
    //                     "temp_min": 298.77,
    //                     "temp_max": 298.774,
    //                     "pressure": 1005.93,
    //                     "sea_level": 1018.18,
    //                     "grnd_level": 1005.93,
    //                     "humidity": 87,
    //                     "temp_kf": 0.26
    //                 },
    //                 "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }],
    //                 "clouds": { "all": 88 },
    //                 "wind": { "speed": 5.71, "deg": 229.501 },
    //                 "sys": { "pod": "d" },
    //                 "dt_txt": "2014-07-23 09:00:00"
    //             }
    //             ]
    //         }

    //     }

    //     return JSON.stringify(result);
    // }

    function createWeekCard(response) {
        // const response = JSON.parse(getWether());  

        let mass = Object.keys(response.list);

        for (let i = 0; i < mass.length; i++) {

            if(i % 8 == 0){
                const respDay = response.list[mass[i]];

            const wetherFullData = {
                time: respDay.dt,
                icon: "https://openweathermap.org/img/wn/" + respDay.weather[0].icon + "@2x.png",
                temperature: respDay.main.temp
            }
            
            let newDate = new Date(wetherFullData.time * 1000);

            let day = $("<div class='day'></div>").appendTo(".week");
            $("<p>").text("" + newDate.getDate() + "." + newDate.getMonth() + "." + newDate.getFullYear()).appendTo(day);
            $("<img src='" + wetherFullData.icon + "'>").appendTo(day);
            $("<p>").text(wetherFullData.temperature + " C").appendTo(day);

            }
            

        }
    }


    function makeAPICall(url) {
        $.ajax({
            dataType: "json",
            url: url,
            success: function (resp) {
                createWeekCard(resp)
            },
            error: function (err, status) {
                //дейсмтвие если ошибка
            }
        });

    }
});