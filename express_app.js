require('dotenv').config()

const express = require('express');

const app = express();

const mongoose = require('mongoose');



const userController = require('./controllers/userControllers');

const PORT= 3000;

app.use(express.json());

app.listen(PORT, function () {

    console.log('server is running...');

    mongoose.connect(process.env.LOCAL_DB)
    .then(function () {

        console.log("DB  is up and running");

        app.get('/users', userController.getAllUsers);

    //    app.post('/users/add', userController.postUser);
    }

    ).catch(function (error) {

        console.log('Cant Connect to DB: ' + error.message);

    });

});