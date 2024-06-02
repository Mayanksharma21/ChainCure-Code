const express = require("express");
const cors = require("cors");
const authenticationRoute = require("./routes/authenticationRoutes");

const PORT = 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authenticationRoute);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
