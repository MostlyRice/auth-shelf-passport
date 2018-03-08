var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
    {
        itemName: {type: String, require: true},
        itemDescription: {type: String, require: true},
        itemUrl: {type: String, require: true},
        userName: {type: String, require: true}
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

router.post('/', (request, response) => {
    let userName = request.body.name;
    request.body.newItem.userName = userName;
    let newItem = new Item(request.body.newItem);
    newItem.save((error, savedItem) => {
        if (error){
          console.log('post error', error);
          response.sendStatus(500);
        } else {
            console.log('post success', savedItem)
          response.sendStatus(201);
        }
    })
})

router.delete('/:id', (req, res) => {
    let thisItem = req.params.id;
    console.log('deleting:', thisItem);
    Item.findByIdAndRemove(
        { "_id": thisItem }, (error, deletedItem) => {
            if(error){
                console.log('delete error', error);
                res.sendStatus(500);
            } else{
                console.log('delete success', deletedItem);
                res.sendStatus(200);
            }
        }
    )
});





module.exports = router;