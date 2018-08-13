<template>
  <section class="container">
    <div>
      <app-logo :hi="sayHi"/>
      <h1 class="title">
        mosquito-activities
      </h1>>>
      <div class="subtitle">
        <city-lists />
      </div>
      <nuxt-link to="/about">About the author</nuxt-link>
      <div>{{$store.state["setStars"]}}</div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import CityList from '~/components/CityList.vue';

export default {
  asyncData(params) {
    console.log(params);
    return {sayHi: "hi"};
  },
  components: {
    "app-logo": AppLogo,
    "city-lists": CityList,
  },
  mounted: async function () {
    await this.fetchSomething();
  },
  data: () => ({
    tokyoArea: "TokyoArea",
  }),
  methods: {
  async fetchSomething() {
    const ip = await this.$axios.$get('http://icanhazip.com');
    console.log(ip);
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
</style>

