const connectToMongo = require("./config/db");
const express = require("express");
var cors = require("cors");
connectToMongo();

const Authentication = require("./routes/auth");
const app = express();
const port = 3005;

app.use(cors());


app.use(express.json());

app.get("/", (req, res) => {
  res.send("200");
});

app.use("/availability", require("./routes/availabilityRoute"));
app.use("/reserve", require("./routes/reservationRoute"));
app.use("/auth", Authentication);
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});

module.exports = app;
