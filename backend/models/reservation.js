var mongoose = require("mongoose");

var reservationSchema = new mongoose.Schema({
  date:Date,
  time:String,
  location:String,
  size:String,
  name: String,
  phone: String,
  email: String,
  tableNumber: String,
});
var Reservation = mongoose.model("Reservation", reservationSchema);

module.exports.model = Reservation;
module.exports.schema = reservationSchema;
