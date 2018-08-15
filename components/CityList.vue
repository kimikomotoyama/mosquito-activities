<template>
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
    props: ["cities"]
}
</script>

<style>
    .city-lists {
        background-color:#F5F5F5;
        padding: 5px;
    }
</style>
