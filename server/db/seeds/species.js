
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('species').del()
    .then(function () {
      // Inserts seed entries
      return knex('species').insert([
        {id: 1, name: 'orca', url: "https://thumbs.dreamstime.com/b/killer-whale-breaching-orcinus-orca-alaska-southeast-alaska-exciting-alaskan-scene-40754926.jpg"},
        {id: 2, name: 'humpback', url: 'https://images.pexels.com/photos/3309869/pexels-photo-3309869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        {id: 3, name: 'minke', url: 'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMzE3NDIxMS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY1ODM4MDUwM30.JLioBKo9I9BqKU7hVr4Zg2qYO0XPv_wKxhxQYdn-oF8/img.jpg?width=1245&quality=85&coordinates=0%2C0%2C0%2C0&height=700'},
        {id: 4, name: 'sea otter', url: 'https://www.thoughtco.com/thmb/bx0uYenWlnh6R5uPpVBymZx6TYs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-176608558-81ad368fc1a7438c96c5ee2959758f3c.jpg'},
        {id: 5, name: 'gray whale', url: 'https://oceana.org/sites/default/files/styles/lightbox_full/public/24_1.jpg?itok=y368B3Tz'},
        {id: 6, name: 'other', url: 'https://cdn5.vectorstock.com/i/1000x1000/04/79/cute-smiling-pastel-whale-with-colorful-unicorn-vector-20940479.jpg'},
        {id: 7, name: 'unknown', url: 'https://static.pokemonpets.com/images/monsters-images-300-300/4223-Unown-W.png'},
        {id: 8, name: 'atlantic white-sided dolphin', url: 'https://ocean-sounds.org/wp-content/gallery/lofoten-atlantic-white-sided-dolphin/atlantic-white-sided-dolphin01.jpg'},
        {id: 9, name: 'pacific white-sided dolphin', url: 'https://i.pinimg.com/originals/8c/07/8a/8c078a8c0a5bb9c4f984e53c2e9b8052.jpg'},
        {id: 10, name: 'dalls porpoise', url: 'https://us.whales.org/wp-content/uploads/sites/2/2019/05/dalls-porpoise-sg-jackie-hildering3-1024x684.jpg'},
        {id: 11, name: 'harbor porpoise', url: 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/hwn4d-C7AM8GBDJZ8-Full-Image_GalleryBackground-en-US-1601056582777._SX1080_.jpg'},
        {id: 12, name: 'harbor seal', url: 'https://www.eopugetsound.org/sites/default/files/topical_article/images/33972_orig_0.jpg'},
        {id: 13, name: 'northern elephant seal', url: 'https://s.abcnews.com/images/US/elephant-seals-1-gty-er-181129_hpMain_16x9_1600.jpg'},
        {id: 14, name: 'southern elephant seal', url: 'https://i.pinimg.com/originals/9e/02/56/9e02567ce372ef71688bd27b06e458e4.jpg'},
        {id: 15, name: 'california sea Lion', url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/California_sea_lion_in_La_Jolla_%2870568%29.jpg'},
        {id: 16, name: 'steller sea lion', url: 'https://avatars.mds.yandex.net/get-zen_doc/3517023/pub_5f044a056731184304e3f3ab_5f044a6a87828053d0cd733d/scale_1200'}
      ]);
    });
};
