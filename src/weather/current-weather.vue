
<template>

<div>

    <ion-card v-if="weather">
        <div class="weather-background">
            <img :src="getWeatherImage(weather.current.weather[0].icon, '4x')">
        </div>
        <ion-card-header>
            <ion-card-subtitle>{{ weather.current.weather[0].description }}</ion-card-subtitle>
            <ion-card-title> {{ formatTemperature(weather.current.temp, 'C') }} </ion-card-title>
        </ion-card-header>

        <ion-card-content>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        Feels like  {{ formatTemperature(weather.current.feels_like ,'C')}}
                    </ion-col>

                    <ion-col>
                    Wind Speed {{Math.round(weather.current.wind_speed)}} mph
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col>
                        Sunrise {{new Date(weather.current.sunrise * 1000).toLocaleTimeString(undefined, { timeStyle: 'short'}) }}
                    </ion-col>
                    <ion-col>
                        Sunset {{new Date(weather.current.sunset * 1000).toLocaleTimeString(undefined, {timeStyle: 'short'})}}
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-card-content>
    </ion-card>
</div>
</template>

<script lang="ts">
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,  IonCol, IonGrid, IonRow } from '@ionic/vue';
    // import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/vue";
    import { defineComponent } from 'vue'
    import {useWeather} from "@/weather/weather.service";



    export default defineComponent({
        components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow},
        // components: {
        //     IonToolbar,
        //     IonGrid,
        //     IonCol,
        //     IonRow,
        //     IonTitle,
        //     IonHeader,
        //     IonContent,
        //     IonCard,
        //     IonCardTitle,
        //     IonCardSubtitle,
        //     IonPage,
        //     IonCardContent,
        //     IonCardHeader
        // },
        setup() {
            const {weather,  formatTemperature, getWeatherImage} = useWeather();

            console.log(weather)



            return {
                weather,
                formatTemperature,
                getWeatherImage
            }
        },

    })
</script>

<style scoped lang="scss">
 ion-card  {
     max-width: 350px;

 }
    .weather-background {
        background-color: #3a7be0;
        display: flex;
        flex-direction: column;
        img {
            align-items: center;
            justify-content: center;
            align-self: center;
        }
       /* img {
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%);
        }*/
    }
</style>
