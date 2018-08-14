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
                                lat: Number(m.latitude),
                                lng: Number(m.longitude)
                            }"
                    :clickable="true"
                    :draggable="true"
                    @click="center={
                                lat: Number(m.latitude),
                                lng: Number(m.longitude)
                            }"
                />
            </GmapMap>
        </no-ssr>
    </div>
</template>

<script>
import axios from "axios";

export default {
    mounted: async function() {
        console.log("mounted in map");
        const { data: locations } = await axios.get("/locations");
        console.log(locations);
        this.markers = locations;
    },
    data: () => ({
        markers: []
    })
}
</script>
