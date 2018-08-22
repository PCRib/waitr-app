var express = require('express');
var router = express.Router();
const Events = require("../models/Events")
const Waitrs = require("../models/Waitrs")


/* GET users listing. */
router.put('/addingIds', function(req, res, next) {
  const eventId = req.body.currentEvent;
  const waitrId = req.body.currentWaitr;
  Events.findById({_id:eventId})
  .then(event => {
    // Waitrs.findById({_id:waitrId})
    event.waitrs_scheduled.push(waitrId);
    event.save()
    .then(result => {
      res.json(result)
    })
  })
  .catch(error => {
    res.status(500).send(error)
  })
});
router.put('/', function(req, res, next) {
    const eventId = req.body.currentEvent;
    const waitrId = req.body.currentWaitr;
    Events.findById({_id:eventId})
    .then(event => {
      // Waitrs.findById({_id:waitrId})
      event.waitrs_scheduled.push(waitrId);
      event.save()
      .then(result => {
        res.json(result)
      })
    })
    .catch(error => {
      res.status(500).send(error)
    })
    Waitrs.findById({_id:waitrId})
    .then(waitr =>{
        waitr.events.push(eventId);
        waitr.save()
        .then(result => {
            res.json(result)
        })
    })
  });
module.exports = router;
