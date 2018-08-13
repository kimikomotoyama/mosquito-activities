<template>
    <div class="city">
        City: {{city.EnglishName}},
        Key: {{city.Key}},
        Latitude: {{city.GeoPosition.Latitude}},
        Longitude: {{city.GeoPosition.Longitude}}
        <mosquito
            v-for="mosquito in mosquitoes" :key="mosquito.id"
            v-bind:mosquito="mosquito"
        />
    </div>
</template>

<script>
import Mosquito from '~/components/Mosquito.vue';

export default {
    props:["city"],
    components: {
        "mosquito": Mosquito
    },
    computed: {
        mosquitoes: function() {
            return this.$store.state["MosquitoActivities"];
        }
    }
}
</script>
