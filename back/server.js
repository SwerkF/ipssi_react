const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

//----------------  Routes  ------------------//
const userRoute = require("./routes/userRoute");

//---------------- Export ----------------//
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
