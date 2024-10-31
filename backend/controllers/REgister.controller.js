const User = require("../models/Usermodel");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if all fields are present
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Username, email, and password are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Error in registration:", error.message); // Logs the error for debugging
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "User logged in successfully" });
  } catch (error) {
    console.error("Error in login:", error.message); // Logs the error for debugging
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
};
