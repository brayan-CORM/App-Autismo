const express = require("express");
const cors = require("cors");
const AuthController = require("./controllers/AuthController");
const CategoryController = require("./controllers/CategoryController");
const { connect } = require("../config/mongooseConfig");
const path = require("path");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.static(`${__dirname}/uploads`));
// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(cors());

connect();
//app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", AuthController);
app.use("/api/categories", CategoryController);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
