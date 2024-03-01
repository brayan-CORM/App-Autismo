// CategoryController.js
const express = require("express");
const router = express.Router();
const Category = require("../models/Category"); // Make sure the path is correct
const multer = require("multer");
const path = require('path');
const fs = require('fs');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    // Use Date.now() to get a unique filename
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.get('/categories', async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.post("/upload", upload.single("categoryImage"), async (req, res) => {
  try {
    const { categoryName } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }
    const categoryImage = req.file.path; // The path where the image is stored

    // Create a new category instance using the Category model
    const newCategory = new Category({
      categoryName: categoryName,
      categoryImage: categoryImage,
      pictograms: [] // Initialize as an empty array if no pictograms are added yet
    });

    // Save the new category to the database
    await newCategory.save();

    // You may want to return the new category object
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// The rest of your router code...

module.exports = router;
