
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('species').del()
    .then(function () {
      // Inserts seed entries
      return knex('species').insert([
        {id: 1, name: 'orca', url: "https://images.pexels.com/photos/34809/loro-park-orca-fish.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" },
        {id: 2, name: 'humpback', url: 'https://images.pexels.com/photos/3309869/pexels-photo-3309869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        {id: 3, name: 'minke', url: 'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMzE3NDIxMS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY1ODM4MDUwM30.JLioBKo9I9BqKU7hVr4Zg2qYO0XPv_wKxhxQYdn-oF8/img.jpg?width=1245&quality=85&coordinates=0%2C0%2C0%2C0&height=700'},
        {id: 4, name: 'sea otter', url: 'https://www.thoughtco.com/thmb/bx0uYenWlnh6R5uPpVBymZx6TYs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-176608558-81ad368fc1a7438c96c5ee2959758f3c.jpg'}
      ]);
    });
};
