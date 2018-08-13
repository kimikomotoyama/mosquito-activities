<template>
    <div class="city">
        City: {{city.EnglishName}},
        Key: {{city.Key}},
        Latitude: {{city.GeoPosition.Latitude}},
        Longitude: {{city.GeoPosition.Longitude}}
    </div>
</template>

<script>
export default {
    props:["city"]
}
</script>
