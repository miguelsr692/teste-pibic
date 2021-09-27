var express = require('express');
const { NotExtended } = require('http-errors');
const { LEGAL_TCP_SOCKET_OPTIONS } = require('mongodb');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET chat page. */
router.get('/chat', function(req, res) {
  res.render('chat', {});
});

/* POST new data */
router.post('/chat', async (req, res) => {
  const font = req.body.font;
  const x = req.body.x;
  const y = req.body.y;
  const z = req.body.z;
  const TimeStamp = req.body.TimeStamp;
  const NewTimeStamp = req.body.NewTimeStamp;
  const Delay = req.body.Delay;


  const db = require("../db");
  const Dado = db.Mongoose.model('dados', db.DadosSchema, 'dados');
  const dado = new Dado({ font,x,y,z,TimeStamp,NewTimeStamp,Delay });
  

  try {
    await dado.save();
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
