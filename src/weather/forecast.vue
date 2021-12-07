<template>
    <div v-if="weather">
        <ion-list>
            <ion-list-header>
                Forecast
            </ion-list-header>

            <ion-item v-for="daily in weather.daily" :key="daily.dt">
                <ion-avatar>
                    <div class="weather-background">

                        <img :src="getWeatherImage(daily.weather[0].icon, '2x')">
                    </div>
                </ion-avatar>

                <ion-label>
                  <h1>
                      {{formatTemperature(daily.temp.day , 'C')}}
                  </h1>
                    <h2> {{ daily.weather[0].description }}</h2>
                    <p>{{new Date(daily.dt * 1000).toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric"})}}</p>
                </ion-label>
            </ion-item>
        </ion-list>
    </div>
</template>

<script>
    import {  IonList,
        IonListHeader,
        IonItem,
        IonAvatar,
        IonLabel } from '@ionic/vue'
    import  {defineComponent, } from 'vue'
    import {useWeather} from "./weather.service";
    export default defineComponent({
        components: {
            IonList,
            IonListHeader,
            IonItem,
            IonAvatar,
            IonLabel
        },
        setup() {
            const {weather, formatTemperature, getWeatherImage} = useWeather();

            return {
                weather,formatTemperature,getWeatherImage
            }
        },



    })
</script>

<style scoped>
    .weather-background {
        background-color: #3a7be0;
        border-radius: 100%;
        border: 2px solid white;
    }

    ion-avatar {
        margin-right: 10px;
    }
</style>
