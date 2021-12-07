// eslint-disable-next-line no-use-before-define
/* eslint-disable */
import { Geolocation } from '@capacitor/geolocation';
import { ref } from 'vue';
import {OneWeather} from "@/weather/one-weather.model";
const weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&appid=81c99e4aca2f4bf2371089f7f6bc4fc4'

const weather = ref<OneWeather>();

fetchWeather()
setInterval(fetchWeather, 120000)

export  function useWeather() {
    return {
        weather,

        formatTemperature,
        getWeatherImage
    }
}
async function fetchWeather() {
    const {coords} = await Geolocation.getCurrentPosition();
    const response = await fetch(`${weatherUrl}&lat=${coords.latitude}&lon=${coords.longitude}&units=imperial`)
    weather.value = await response.json()
}


function formatTemperature( value: number, format: 'F' | 'C') {
    return `${Math.round((value - 32) * 5/9)}°${format}`
}

function getWeatherImage(iconName: string, size: '2x' | '4x') {
    return `http://openweathermap.org/img/wn/${iconName}@${size}.png`
}
