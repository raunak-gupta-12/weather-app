var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik="76093111fc480dbc5cd445cefacf9cf0"

document.querySelector('.inputs input[type="text"]').addEventListener('input', function() {
    this.value = this.value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
});

function convertion(val) {
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>{
        var nameval = data['name']
        var descript = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var windspeed = data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}</span>`
        temp.innerHTML= `Temperature: <span>${ convertion(temperature)} C</span>`
        descrip.innerHTML= `Sky Conditions: <span>${descript}</span>`
        wind.innerHTML= `Wind Speed: <span>${windspeed} km/hr</span>`
    })

    .catch(err => alert('You entered Wrong city'))
})