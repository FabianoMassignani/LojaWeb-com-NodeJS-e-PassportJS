var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [

    new Product({
      imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Fallout_3_cover_art.PNG/220px-Fallout_3_cover_art.PNG',
      title:'Fallout 3',
      description:'.........',
      price: 12
    }),
    new Product({
        imagePath: 'https://d1r7xvmnymv7kg.cloudfront.net/sites_products/darksouls3/assets/img/DARKSOUL_facebook_mini.jpg',
        title: 'Dark Souls 3 ',
        description: '...............',
        price: 50
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
