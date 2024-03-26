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
const databaseRoute = require("./routes/databaseRoute")



//---------------- Export ----------------//
app.use("/user", userRoute);
app.use("/appointment", appointmentTypeRoute);
app.use("/office", noticeRoute);
app.use("/notice", officeRoute);
app.use("/schedule", scheduleRoute);
app.use("/database", databaseRoute);




app.listen(port, () => {
  console.log(`Backend runing on http://localhost:${port}`);
});
