const express = require("express");
const { Nuxt, Builder } = require("nuxt");
const app = express();
const port = process.env.PORT || 3000;
const knex = require('knex')({
    client: 'pg',
    connection: {
        database : 'mosquito'
    }
});
const moment = require("moment");
const axios = require("axios");
const cors = require("cors");

const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";

async function start() {
    const nuxt = new Nuxt(config);
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }
    // app.use(cors());
    app.get("/activities", async (req, res) => {
        console.log("activities server side");
    
        //Get master city database
        let cities = await knex.select().from('cities');
        if (cities.length === 0) {
            console.log("creating cities master db");
            const tokyoKey = "226396";
            const accuAPIUrl = `http://dataservice.accuweather.com/locations/v1/cities/neighbors/${tokyoKey}?apikey=${process.env.API_KEY}`;
            const tokyoArea = await axios.get(accuAPIUrl);
    
            let citiesArray = [];
            tokyoArea.data.forEach((city) => {
                const obj = {
                    "key": city.Key,
                    "city": city.EnglishName,
                    "latitude": city.GeoPosition.Latitude,
                    "longitude": city.GeoPosition.Longitude,
                    "created_at": new Date(),
                    "updated_at": new Date()
                }
                console.log(obj);
                citiesArray.push(obj);
            });
            await knex('cities').insert(citiesArray);
            cities = await knex.select().from('cities');
        }
       
        const activities = await knex.select().from('activities')
        .whereRaw("date_trunc('day', updated_at) = date_trunc('day', now())");
    
        if (activities.length > 0) {
            res.status(200).send(activities);
        } 
        else {
            console.log("create new db for activity");
            //Get mosquito activity from API
            let knexPromiseArray = [];
            for (const index in cities) {
                const key = cities[index].key;
                const accuAPIUrl = `http://dataservice.accuweather.com/indices/v1/daily/1day/${key}/17?apikey=${process.env.API_KEY}`;
                knexPromiseArray.push(axios.get(accuAPIUrl));
            }
        
            const result = await Promise.all(knexPromiseArray);
            const activitiesModel = result.map((response, index) => {
                return { 
                    key: String(cities[index].key),
                    city: cities[index].city,
                    value: response.data[0].Value,
                    category: response.data[0].Category,
                    categoryValue: response.data[0].CategoryValue,
                    mobileLink: response.data[0].MobileLink,
                    latitude: Number(cities[index].latitude),
                    longitude: Number(cities[index].longitude),
                    created_at: new Date(),
                    updated_at: new Date(),
                }
            });
            await knex('activities').insert(activitiesModel);
            res.status(200).send(activitiesModel);
        }
    
    });
    app.use(nuxt.render);
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
}


start();