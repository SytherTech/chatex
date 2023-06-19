const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        match: /^(\+\d{1,3})?\d{10}$/
    },
    about: {
        type: String,
        required: true,
        maxlength: 200
    },
    coins: {
        type: Number,
        required: true,
        min: 0
    },
    diamonds: {
        type: Number,
        required: true,
        min: 0
    },
    imgurl: {
        type: String,
        required: true,
        match: /^https?:\/\/\S+$/
    },
    referalCode: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    followers: {
        type: Number,
        required: true,
        min: 0
    },
    isonline: {
        type: Boolean,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
