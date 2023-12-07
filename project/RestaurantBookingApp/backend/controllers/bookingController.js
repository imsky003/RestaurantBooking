const Bookings = require('../models/bookingModel')
const Guest = require('../models/guestModel')
// const { transport } = require('../utils/utils')


// GET ALL BOOKINGS //

const getBookings = async (req, res) => {
  
  const result = await Bookings.find()
        res.json(result);
}
//get booking by id
const getBookingsByid = async (req, res) => {
  
  try {
    const notes = await Bookings.findById(req.params.id);
    res.json(notes);
} catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error occurred");
}
}
// SAVE BOOKING //

const saveBooking = async (req, res) => {
  const { date,time, guest,phone,table,message } = req.body

  // Save values from guest object in req.body


  try {
    // Check if guest already exists in db
     const guestExists = await Guest.findOne({ email })

    // If guest exists, save booking with guest ID
    if (guestExists) {
      const newBooking = new Bookings({
        date: date,
        time: time,
        guest: guestExists._id,
        phone: phone,
        table: table,
        message: message,

      })
      await newBooking.save()

      // Send email confirmation
      // transport(email, newBooking.date, newBooking.id)

      // Set 200 status and send response
      res.status(200).send(newBooking)
    } else {
      // If guest doesn't exist, create one in db...
      const newGuest = new Guest({
        date: date,
        time: time,
        guest: guest,
        phone: phone,
        table: table,
        message: message,
      })
      // Save new guest to db
      await newGuest.save()
      res.status(200).send(newGuest)
    }

     
    
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

//////////////////
// EDIT BOOKING //
//////////////////
const editBooking = async (req, res) => {
  const { guest } = req.body;
  try {
      const newNote = {};
      if (guest) {
          newNote.guest = guest;
      }

     
      //    find note by id
      let note = await Bookings.findById(req.params.id);
     
      note = await Bookings.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
      res.json({ note });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
  }
}

////////////////////
// DELETE BOOKING //
////////////////////
const deleteBooking = async (req, res) => {
  const { guest } = req.body;
  try {

      //    find note by id
      let note = await Bookings.findById(req.params.id);
     
      note = await Bookings.findByIdAndDelete(req.params.id);
      res.json({ note });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
  }
}

//////////////////////
// GET AVAILABILITY //
//////////////////////
const searchAvailability = async (req, res) => {
  const { date, time, amount, tables } = req.body

  // Get all bookings from db
  const allBookings = await Bookings.find().lean()

  try {
    // Get existing reservations from requested day
    const requestedDate = allBookings.filter((booking) => booking.date === date)
    // If there are no reservations on requested date, confirm booking
    if (requestedDate.length < 1) {
      res.status(200).send(true)
    } else {
      /* If there are bookings on requested date,
    check if there are any at the same time */
      for (let i = 0; i < requestedDate.length; i++) {
        // List of bookings on the same date and same time:
        const sameDayAndTime = requestedDate.filter(
          (booking) => booking.time === time,
        )
        // If there are no bookings on requested time, confirm booking
        if (sameDayAndTime.length < 1) {
          res.status(200).send(true)
        } else {
          // Get list of bookings with same date & time:
          for (let j = 0; j < sameDayAndTime.length; j++) {
            // Get total amount of booked tables on same date & time
            const bookedTables = sameDayAndTime.reduce(function (a, b) {
              return a + b.tables
            }, 0)
            // If 15 tables are already booked, decline booking request
            if (bookedTables + tables > 15) {
              res.status(200).send(false)
            } // If there are tables available, confirm booking
            else {
              res.status(200).send(true)
            }
          }
        }
      }
    }
  } catch (error) {
    res.status(400)
  }
}

////////////////////////
// EMAIL CANCELLATION //
////////////////////////
const emailCancellation = async (req, res) => {
  const id = req.params.id

  try {
    // Find booking in db and delete
    await Bookings.findById(id).deleteOne()
    res.status(200)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

//////////////////////////////////////
// CLEAR BOOKINGS IN DB for Cypress //
//////////////////////////////////////
const clearBookings = async (req, res) => {
  await Bookings.deleteMany({})
  res.sendStatus(200)
}

module.exports = {
  saveBooking,
  getBookings,
  editBooking,
  deleteBooking,
  searchAvailability,
  emailCancellation,
  clearBookings,
  getBookingsByid,
}
