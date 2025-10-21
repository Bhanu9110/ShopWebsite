// createAdmin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Replace this with your actual User model path
const User = require('./models/User'); 

// MongoDB connection string
const mongoURI = "mongodb://localhost:27017/your-database-name"; // <-- replace with your DB name

// Default admin credentials
const adminData = {
  name: "Admin",
  email: "admin@example.com",
  password: "Admin@123", // you can change this
  phone: "9999999999",
  role: "admin" // or isAdmin: true depending on your schema
};

async function createAdmin() {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminData.email });
    if (existingAdmin) {
      console.log("Admin already exists!");
      process.exit(0);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminData.password, salt);
    adminData.password = hashedPassword;

    const adminUser = new User(adminData);
    await adminUser.save();

    console.log("Admin user created successfully!");
    console.log(`Email: ${adminData.email}`);
    console.log(`Password: ${"Admin@123"}`);
    process.exit(0);
  } catch (err) {
    console.error("Error creating admin:", err);
    process.exit(1);
  }
}

createAdmin();