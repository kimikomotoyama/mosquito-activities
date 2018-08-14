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

app.set("port", port);

const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";

async function start() {
    const nuxt = new Nuxt(config);
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }
    app.use(nuxt.render);
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
}

app.get("/locations", async (req, res) => {
    console.log("locations server side");
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);

    const locations = await knex.select().from('locations')
    .whereRaw("date_trunc('day', created_at) = date_trunc('day', now())");
    console.log(locations);

    if (locations.length > 0) {
        res.status(200).send(locations);
    } else {

    }
        
});

start();