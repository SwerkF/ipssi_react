const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

//----------------  Routes  ------------------//
const userRoute = require("./routes/userRoute");
const appointmentTypeRoute = require("./routes/appointmentTypeRoute");
const noticeRoute = require("./routes/noticeRoute");
const officeRoute = require("./routes/officeRoute");
const scheduleRoute = require("./routes/scheduleRoute");
const databaseRoute = require("./routes/databaseRoute");
const petRoute = require("./routes/petRoute");
const calendarRoute = require("./routes/calendarRoute");

//---------------- Export ----------------//
app.use("/user", userRoute);
app.use("/appointment", appointmentTypeRoute);
app.use("/office", officeRoute);
app.use("/notice", noticeRoute);
app.use("/schedule", scheduleRoute);
app.use("/database", databaseRoute);
app.use("/pet", petRoute);
app.use("/calendar", calendarRoute);

//server run
app.listen(port, () => {
  console.log(`Backend runing on http://localhost:${port}`);
});
