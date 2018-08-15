<template>
  <section class="container">
    <div>
      <h1 class="title">
        mosquito-activities
      </h1>
      <google-map :markers="locations"/>
      <div class="subtitle">
        <city-lists :cities="locations"/>
      </div>
      <app-logo :hi="sayHi"/>
      <nuxt-link to="/about">About the author</nuxt-link>
      <div class="api">API provided by:<img class="aw-logo" src="/AW_RGB.jpg"/></div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import CityList from '~/components/CityList.vue';
import GoogleMap from '~/components/Map.vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import axios from "axios";

export default {
  components: {
    "app-logo": AppLogo,
    "city-lists": CityList,
    "google-map": GoogleMap,
  },
  mounted: async function () {
    await this.getActivities();
  },
  data: () => ({
    tokyoArea: "TokyoArea",
    locations: [],
    sayHi: "km"
  }),
  methods: {
  async getActivities() {
    const locations = await axios.get('/activities');
    this.locations = locations.data;
  }
}
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.api {
  margin: 50px;
}
.aw-logo {
  width: 250px;
  height: 40px;
}
</style>

