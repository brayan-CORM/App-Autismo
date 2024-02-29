const express = require("express");
const cors = require("cors");
const AuthController = require("./controllers/AuthController");
const CategoryController = require("./controllers/CategoryController");
const { connect } = require("../config/mongooseConfig");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.static(`${__dirname}/public`));
app.use(cors());

connect();

app.use("/api", AuthController);
app.use("/api/category", CategoryController);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
