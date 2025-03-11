// import user from "../models/user.js";
import User from "../models/user.js";
import bcrypt from 'bcryptjs'


export const registerController = async (req,res) => {
      const {name,email,password} = req.body ;
      try {
            const user = await User.findOne({ email })
            console.log(user);
            // Check User exist or not
            if(user) return res.status(400).json({"message":"already exist"});

            // password hashing
            const salt = bcrypt.genSalt(10)
            const hashedPassword = bcrypt(password,salt)
            const newUser = new User({
         name,
         email,
         password:hashedPassword
      });
      newUser.save();
      res.status(201).send("User created",User)
} catch (error) {
      console.error(error);
      res.status(500).send("Server Issue",error)
}
}
export const loginController =async (req,res) => {
      const {email,password} = req.body ;
      try {
            const user = await User.findOne({ email });
            if(!user) res.status(400).send("This email has no account");

            const isMatch = await bcrypt.compare(password,user.password)
            console.log(isMatch);
            if(!isMatch) res.status(400).send("Password wronge");

            res.send("Done")
      } catch (error) {    
            console.error(error)
      }
} 