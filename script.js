var city = "Beirut"


$.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=98fdfd73f008f4270aeb1a4273e447f0' , function(data){
    
    console.log(data)
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp = data.main.temp;

    var weather = data.weather[0].main;

    var location = data.name;

    $('.icon').attr('src' , icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
    $('.location').append(location);
});