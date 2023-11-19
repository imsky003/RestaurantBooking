const connectToMongo = require("./config/db");
const express = require("express");
var cors = require("cors");
connectToMongo();
const bookingRoutes = require("./routes/bookingsRoute");
const guestRoutes = require("./routes/guestRoute");
const app = express();
const port = 10000;

app.use(cors());


app.use(express.json());

app.get("/", (req, res) => {
  res.send("200");
});

app.use("/bookings", bookingRoutes);
app.use("/guests", guestRoutes);
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});

module.exports = app;
