const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
var { Film } = require('./film')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/myFilm');
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/createFilm', function (req, res) {
  
    console.log(req.body);
    var filmData = req.body;

    var myfilm = new Film(filmData);
    myfilm.save().then(function (data) {
        res.json({
            message: "Success"
        })
    }).catch(function (err) {
        res.status(500).json({
            message: "Error"
        })

    })
});

app.get('/getFilms', function (req, res) {
   // app.use(cors())
    Film.find().then(function (filmData) {
        res.json(filmData)
    }).catch(function (err) {
        res.status(500).json({
            message: "Error"
            
        })
    })
});
app.put('/updateFilms/:id', function (req, res) {
    app.use(cors())
    Film.findById(req.params.id).then(function (filmData) {
        console.log(filmData)
        filmData.Phone = 122411221;
        filmData.save().then(function (savedFilmdata) {
            console.log("update success")
        }).catch(function (err) {
            console.log(err);
        })
    }).catch(function (err) {
        console.log(err)
    })
})

app.listen(3000)