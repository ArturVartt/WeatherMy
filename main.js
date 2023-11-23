const form = document.querySelector('.weather__form')
const myInput = document.querySelector('#input_firstt')
const searchImg = document.querySelector('.search')
const leftBox = document.querySelector('.left_box')
const temperature = document.querySelector('.temperature')
const weatherImg = document.querySelector('.weather_img')
const cityName = document.querySelector('.city_name')
const heart = document.querySelector('.heart')

function clean() {
    myInput.value = ''
}

function searchCity() {
    const CityValue = myInput.value
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f&units=metric';
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';

    fetch(`${serverUrl}?q=${CityValue}&appid=${apiKey}`)
        .then(respones => respones.json())
        .then(object => {
            const temp = Math.round(object.main.temp)
            temperature.textContent = temp + '°'

            const nameCity = object.name
            cityName.textContent = nameCity

            const weatherIcon = `https://openweathermap.org/img/wn/${object.weather[0].icon}@2x.png`
            weatherImg.src = weatherIcon
        })

}

form.addEventListener('submit', function (event) {
    event.preventDefault()
    searchCity()
    clean()
})

