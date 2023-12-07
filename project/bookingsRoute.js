const express = require('express')
const {
  saveBooking,
  getBookings,
  editBooking,
  deleteBooking,
  searchAvailability,
  emailCancellation,
  clearBookings,
  getBookingsByid,
} = require('../controllers/bookingController.js')
const router = express.Router()

// SEARCH BOOKINGS
router.post('/search', searchAvailability)
// GET BOOKING
router.get('/', getBookings)
// GET BOOKING by id
router.get('/:id', getBookingsByid)
// SAVE BOOKING
router.post('/', saveBooking)
// CLEAR DB
router.delete('/clear-bookings', clearBookings)
// EDIT BOOKING
router.put('/:id', editBooking)
// DELETE BOOKING
router.delete('/:id', deleteBooking)
router.delete('/cancel/:id', emailCancellation)

module.exports = router
