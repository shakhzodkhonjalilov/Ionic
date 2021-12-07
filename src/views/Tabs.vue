<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" v-if="weather">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <img :src="getWeatherImage(weather.current.weather[0].icon, '2x')">
            <ion-label>Current {{formatTemperature(weather.current.temp, 'C')}}</ion-label>

        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="calendarOutline" />
          <ion-label>Forecast</ion-label>
        </ion-tab-button>
        

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
  import { useWeather } from "@/weather/weather.service";
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { calendarOutline} from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
   setup() {
    const { weather,  formatTemperature, getWeatherImage } =  useWeather();

    return {
calendarOutline,
      weather,  formatTemperature, getWeatherImage

    }
  }
}
</script>

<style lang="scss" scoped>
    img {
        height: 26px;
        width: 26px;
        margin-bottom: 0;
        margin-top: 3px;
        background-color: #3a7be0;
        border-radius: 100%;
    }
</style>
