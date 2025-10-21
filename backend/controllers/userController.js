import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// login user

const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false,message:"User Not Found"})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid Credentials"})
        }

        const token = createToken(user._id)
        res.json({success:true,message:"User Logged In Successfully",token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error in Login"}) 
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register user
const registerUser = async (req,res) => {
    const {name,email,password} = req.body;
    try {

        // check if user already exists
        const exists = await userModel.findOne({email:email});
        if(exists){
            return res.json({success:false,message:"User Already Exists"})  
        }
        // validate email format and password strength

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please Enter a Valid Email"})
        }

        if(password.length<8){
            return res.json({success:false,message:"Please Enter the Strong Password must be at least 8 characters"})
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

       const user =  await newUser.save()
       const token = createToken(user._id)
       res.json({success:true,message:"User Registered Successfully",token:token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error in Registration"})
    }
}

export {loginUser,registerUser};