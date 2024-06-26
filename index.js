const express = require("express");
const cors = require("cors");
const PORT = 4000;
const GlobalRoutes = require("./routes/GlobalRoutes");
const bodyParser = require("body-parser");
const ConnectDb = require("./db/connection");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/", GlobalRoutes);

app.get("/", (req, res) => {
  res.send("welcome Again");
});
const startConnection = async () => {
  try {
    // console.log(process.env.MONGO_URL);
    await ConnectDb(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`server is runing on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startConnection();
