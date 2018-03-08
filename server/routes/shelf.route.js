var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
    {
        itemName: {type: String, require: true},
        itemDescription: {type: String, require: true},
        itemUrl: {type: String, require: true},
        userName: [{type: mongoose.Schema.ObjectId, ref: 'users'}]
    }
);
const Item = mongoose.model('Item', ItemSchema, 'shelf');

router.get('/', (request, response) => {
    Item.find({}, (error, foundItems) => {
        if (error){
          console.log('error on find items:', error);
          response.sendStatus(500);
        } else {
          response.send(foundItems);
        }
      })
})







module.exports = router;