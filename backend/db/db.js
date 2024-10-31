const mongoose = require("mongoose");

const db = async () => {
  try {
    // Connect to your MongoDB database
    await mongoose.connect(
      "mongodb+srv://Aryan:Aradhya%403462@cluster0.x00qh.mongodb.net/yourDatabaseName" // Replace 'yourDatabaseName'
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = db;
