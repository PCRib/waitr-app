var express = require('express');
var router = express.Router();
const Waitrs = require("../models/Waitrs")




/* GET users listing. */
router.get('/', function(req, res, next) {
  Waitrs.find({})
  .then(waitrs => {
    res.json(waitrs)
  })
  .catch(error => {
    res.status(500).send(error)
  })
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id
  Waitrs.findById({_id:id})
  .populate('events')
  .then(waitr => {
    res.json(waitr)
  })
  .catch(error => {
    res.status(500).send(error)
  })
});

router.post('/', function(req, res, next) {
  const data = req.body

  let newWaitr = Waitrs({
    name: data.name,
    rating: data.rating,
    waitr_type: data.waitr_type,
    biography: data.biography,
    skills: data.skills,
    events_worked:data.events_worked,
    five_star_ratings: data.five_star_ratings,
    great_service: data.great_service,
    greats: data.greats
  }
  )
  newWaitr.save()
  .then(savedWaitr => {
    res.json(savedWaitr)
  })
  .catch(error => {
    res.status(500).send(error)
  })
});

module.exports = router;
