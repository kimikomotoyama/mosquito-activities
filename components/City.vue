<template>
    <div class="city">
        <div>City: {{city.city}}</div>
        <div>Mosquito activity: {{city.category}}</div>
        <div>Mosquito activity level: {{city.categoryValue}}</div>
        <a :href="city.mobileLink">Details</a>
    </div>
</template>

<script>
export default {
    props:["city"],
}
</script>

<style>
    .city {
        text-align: left;
        font-size: 15px;
        margin: 10px;
        padding: 5px;
        background-color: #FFFFFF;
    }
</style>
