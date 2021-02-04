
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, name: 'Camano Island, Washington, USA', latLong: '48.1914867,-122.5151585', url: 'https://discoverstanwoodcamano.com/wp-content/uploads/2020/01/camano-background.jpg'},
        {id: 2, name: 'Mayne Island, British Columbia, Cananda', latLong: '48.840329972,-123.275165566', url: 'https://worldadventurists.com/wp-content/uploads/2019/07/dinnerbay1.jpg'},
        {id: 3, name: 'Sooke, British Columbia, Canada', latLong: '48.3740,-123.7356', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Sooke_Basin_View_-_panoramio.jpg/1920px-Sooke_Basin_View_-_panoramio.jpg'}
      ]);
    });
};
