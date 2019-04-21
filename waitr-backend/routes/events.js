var express = require("express");
var router = express.Router();
const Events = require("../models/Events");
const Waitrs = require("../models/Waitrs");

/* GET users listing. */
router.get("/", function(req, res, next) {
  Events.find({})
    .then(events => {
      res.json(events);
      console.log(events);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

router.get("/:id", function(req, res, next) {
  const id = req.params.id;
  Events.findById({ _id: id })
    .populate("waitrs_scheduled")
    .then(event => {
      res.json(event);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

router.post("/", function(req, res, next) {
  const data = req.body;
  let newEvent = Events({
    event_date: data.event_date,
    event_time: data.event_time,
    event_price: data.event_price,
    event_location: data.event_location,
    event_address: data.event_address,
    event_client: data.event_client,
    event_type: data.event_type,
    attire: data.attire,
    hourly_rate: data.hourly_rate,
    waitrs_scheduled: []
  });
  newEvent
    .save()
    .then(savedEvent => {
      res.json(savedEvent);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

router.put("/addingIds", function(req, res, next) {
  const eventId = req.body.currentEvent;
  const waitrId = req.body.currentWaitr;
  Events.findById({ _id: eventId })
    .then(event => {
      // Waitrs.findById({_id:waitrId})
      event.waitrs_scheduled.push(waitrId);
      event.save().then(result => {
        res.json(result);
      });
    })
    .catch(error => {
      res.status(500).send(error);
    });
});
module.exports = router;
