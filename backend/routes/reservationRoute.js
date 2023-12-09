var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Day = require("../models/day").model;
const Reservation = require("../models/reservation").model;

// add the data
router.post("/", async function(req, res, next) {
 
        const { date,time, location,size,name,phone,email,table } = req.body
        const newBooking = new Reservation({
          date: date,
          time: time,
          location: location,
          size:size,
          name: name,
          phone: phone,
          email: email,
          tableNumber: table

        })
        await newBooking.save()

        // Send email confirmation
        // transport(email, newBooking.date, newBooking.id)

        // Set 200 status and send response
        res.status(200).send(newBooking)
});
// fetch the data
router.get("/", async function(req, res, next) {
 
  const result = await Reservation.find()
  res.json(result);
});


// delete the booking
router.delete("/:id", async function(req, res, next) {
 
  try {

    //    find booking by id
    let note = await Reservation.findById(req.params.id);
   
    note = await Reservation.findByIdAndDelete(req.params.id);
    res.json({ note });
} catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
}


});

// update the booking
router.put("/:id", async function(req, res, next) {
 
  // const { phone,email,table } = req.body
  const { time, location,size,name,phone,email,table } = req.body
  try {
      const newNote = {};
      // if (date) {
      //   newNote.date = date;
      // }
      if (time) {
        newNote.time = time;
      }
      if (location) {
        newNote.location = location;
      }
      if (size) {
        newNote.size = size;
      }
      if (name) {
        newNote.name = name;
      }
      if (phone) {
        newNote.phone = phone;
      }
      if (email) {
        newNote.email = email;
      }if (table) {
        newNote.table = table;
      }
     
      //    find note by id
      let note = await Reservation.findById(req.params.id);
     
      note = await Reservation.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
      res.json({ note });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
  }


});
// get booking by id
//get booking by id


// fetch the data
router.get("/:id", async function(req, res, next) {
 
  try {
    const notes = await Reservation.findById(req.params.id);
    res.json(notes);
} catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error occurred");
}

});
module.exports = router;
