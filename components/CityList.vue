<template>
    <!-- <div>{{$store.state["TokyoArea"]}}</div> -->
    <div class="city-lists">
        <city v-for="city in cities" :key="city.id"
            v-bind:city="city"
        />
    </div>
</template>

<script>
import City from '~/components/City.vue';

export default {
    components: {
        City
    },
    computed: {
        cities: function() {
            return this.$store.state["TokyoArea"];
        }
    }
}
</script>
