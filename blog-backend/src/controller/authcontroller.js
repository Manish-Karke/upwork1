import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/user";

exports.register = async (req, res) => {
try {
    const {username, email, password}= req.body;

// hashing of password  is done here
const hashing_password = await bcrypt.hash(password,10);
const newuser = new user ({ username, email, password:hashing_password})
await newuser.save();
res.status(201).json({message: "New user is registered"})

} catch (error) {
    res.status(500).json({message:"user can't be registred"})
    
}

}

exports.login = async(req,res)=>{
    const {email,password}=req.body;
    const user = await user.findone({email})
    if(!user) return res.status(400).json({message:"email is not found"})
    

    const ismatch = await bcryp.compare(password, user.password)
    if(!ismatch) return res.status(400).json({message:"password is not matched"})

    const token = jwt.sign

}