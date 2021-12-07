<template>
    <div>
    <current-weather></current-weather>
    </div>
</template>

<script>
    import  {defineComponent} from 'vue'
    import CurrentWeather from './current-weather';
    export default defineComponent({
components: {
    CurrentWeather
},
        setup() {


            return {

            }
        },



    })
</script>

<style scoped>

</style>
