const express = require('express')
const app = express();
const mongoose = require('mongoose');
const User = require('./model/user_model');

mongoose.connect('mongodb://127.0.0.1:27017/chatapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });


app.listen(3000, () => {
    console.log("Server Running")
})

app.post('/api/v1/user', async (req, res) => {


    try {
        const newUser = new User({
            _id: '1',
            name: 'John Doe',
            phone: '+923495399902',
            about: 'I am a software developer.',
            coins: 100,
            diamonds: 50,
            imgurl: 'https://example.com/profile.jpg',
            referalCode: generateReferralCode(),
            followers: 200,
            isonline: true
        });

        newUser.validate()
            .then(() => {
                // Validation passed, save the user to the database
                return newUser.save();
            })
            .then(user => {
                res.status(200).json({
                    status: "success",
                    message: "User created"
                })
            })
            .catch(error => {
                res.status(200).json({
                    status: "failed",
                    message: error.message
                })
            });

    } catch (error) {
        res.status(200).json({
            status: "failed",
            message: error.toString()
        })
    }


})
function generateReferralCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let referralCode = '';
    for (let i = 0; i < 8; i++) {
        referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return referralCode;
}