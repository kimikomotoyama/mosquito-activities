<template>
    <div>
        <no-ssr placeholder="Loading...">
            <GmapMap
                :center="{lat:35.683, lng:139.804}"
                :zoom="14"
                map-type-id="terrain"
                style="width: 100%; height: 400px"
            >
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="{
                                lat: Number(m.latitude),
                                lng: Number(m.longitude)
                            }"
                    :icon="{url: '/bug_ka.png'}"

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
    props: ["markers"]
}
</script>
