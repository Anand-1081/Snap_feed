const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({
    imageUrl: String,
    caption: String,
})

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;