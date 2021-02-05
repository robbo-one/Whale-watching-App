
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, name: 'Camano Island, Washington, USA', latLong: '48.1914867,-122.5151585', url: 'https://discoverstanwoodcamano.com/wp-content/uploads/2020/01/camano-background.jpg'},
        {id: 2, name: 'Mayne Island, British Columbia, Canada', latLong: '48.840329972,-123.275165566', url: 'https://worldadventurists.com/wp-content/uploads/2019/07/dinnerbay1.jpg'},
        {id: 3, name: 'Sooke, British Columbia, Canada', latLong: '48.3740,-123.7356', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Sooke_Basin_View_-_panoramio.jpg/1920px-Sooke_Basin_View_-_panoramio.jpg'},
        {id: 4, name: 'Galiano Island, BC, CA', latLong: '49.12,-123.47', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Galiano_Island_from_above_%282015%29.png/1024px-Galiano_Island_from_above_%282015%29.png'},
        {id: 5, name: 'Seattle, WA, US', latLong: '47.61,-122.44', url: 'https://cdn.britannica.com/22/191022-050-C80A402F/view-Seattle.jpg'},
        {id: 6, name: 'Port Renfrew, BC, CA', latLong: '48.37257,-123.97769', url: 'https://handsomedans.ca/wp-content/uploads/2015/12/Port_Renfrew_Aerial-127-500x281.jpg'},
        {id: 7, name: 'Pender Island, BC, CA', latLong: '48.766667,-123.3195', url: 'https://southerngulfislands.com/sites/default/files/pender_arial.jpg'},
        ]);
    });
};
