// import mongoose from "mongoose";

// export const connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://mahalakshmisteeltraders:23062005@cluster0.e2rg8uk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
// }

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URL;

    if (!mongoURI) {
      throw new Error("❌ MONGO_URL is not defined in environment variables");
    }

    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};
