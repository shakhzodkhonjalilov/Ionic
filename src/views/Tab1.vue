<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Current Weather</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Current Weather</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row class="ion-justify-content-center">
            <ion-col size="auto" class="min-width">
              <current-weather></current-weather>
            </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow } from '@ionic/vue';

  import CurrentWeather from '../weather/current-weather.vue'

  export default  {
    name: 'Tab1',
    components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, CurrentWeather, IonCol, IonGrid, IonRow }
  }
</script>

<style scoped lang="scss">
  .min-width {
    min-width: 350px;
  }
</style>
