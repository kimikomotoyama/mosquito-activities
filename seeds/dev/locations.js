
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      const locationsArray = [];
      // Inserts seed entries
      const locations = [
        {
          City: "Shirakawa", Key: "1511680", Latitude: 35.683, Longitude: 139.804
          ,mosquitoActivity: "Extreme"
        },
        {
          City: "Hirano", Key: "1511687", Latitude: 35.678, Longitude: 139.805
          ,mosquitoActivity: "Extreme"
        },
        {
          City: "Kikukawa", Key: "2409711", Latitude: 35.688, Longitude: 139.807
          ,mosquitoActivity: "Extreme"
        },
        {
          City: "Morishita", Key: "1508139", Latitude: 35.686, Longitude: 139.803
          ,mosquitoActivity: "Extreme"
        },
        {
          City: "Ogibashi", Key: "1511686", Latitude: 35.683, Longitude: 139.815
          ,mosquitoActivity: "Extreme"
        },
        {
          City: "Sarue", Key: "2410190", Latitude: 35.686, Longitude: 139.815
          ,mosquitoActivity: "Extreme"
        },
        {
          City: "Sengoku", Key: "1511685", Latitude: 35.678, Longitude: 139.815
          ,mosquitoActivity: "Extreme"
        },
        {
          City: "Ishijima", Key: "1938111", Latitude: 35.681, Longitude: 139.812
          ,mosquitoActivity: "Extreme"
        },
        {
          City: "Miyoshi", Key: "1511689", Latitude: 35.68, Longitude: 139.805
          ,mosquitoActivity: "Extreme"
        },
        {
          City: "Senda", Key: "1511683", Latitude: 35.681, Longitude: 139.816
          ,mosquitoActivity: "Extreme"
        }
      ];

      let obj = {};
      for(const i in locations) {
        console.log(locations[i]);
        obj = {
          id: locations[i].Key,
          city: locations[i].City,
          key: locations[i].Key,
          latitude: locations[i].Latitude,
          longitude: locations[i].Longitude,
          mosquito_activity: locations[i].mosquitoActivity,
          created_at: new Date(),
          updated_at: new Date()
        };
        locationsArray.push(obj);
      }

      return knex('locations').insert(locationsArray);
    });
};
