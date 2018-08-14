<template>
    <div>
        <no-ssr placeholder="Loading...">
            <GmapMap
                :center="{lat:35.683, lng:139.804}"
                :zoom="14"
                map-type-id="terrain"
                style="width: 100%; height: 300px"
            >
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="{
                                lat: m.GeoPosition.Latitude,
                                lng: m.GeoPosition.Longitude
                            }"
                    :clickable="true"
                    :draggable="true"
                    @click="center={
                                lat: m.GeoPosition.Latitude,
                                lng: m.GeoPosition.Longitude
                            }"
                />
            </GmapMap>
        </no-ssr>
    </div>
</template>

<script>

export default {
    computed: {
        markers: function() {
            return this.$store.state["TokyoArea"];
        }
    },
    mounted: function() {
        console.log(this.$store.state["TokyoArea"]);
    }
}
</script>
