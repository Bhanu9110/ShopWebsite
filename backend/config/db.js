import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mahalakshmisteeltraders:23062005@cluster0.e2rg8uk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}