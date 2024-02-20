import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Controller function for testing purposes
const testingController = async (req, res, next) => {
    res.status(200).json({ message: "Hello" })
}

// Controller function for user registration
const registerUser = async (req, res, next) => {
    try {
        const { name, phoneNo, emailId, location, age, password } = req.body;
    console.log(name,password,age,location,emailId)
        // Check if user already exists
        const exist = await User.findOne({ emailId });
        if (exist) {
          
            throw new Error("User already exists please try again");
        }

        // Hash the password before saving user in the database
        const hash = await bcrypt.hash(password, 10);
        const newUser = new User({ age, emailId, location, name, password: hash, phoneNo });

        // Save the new user to the database
        const user = await newUser.save();
        if (!user) {
            throw new Error("Something went wrong while registering a user");
        }

        // Return the newly registered user
        return res.status(200).json(user._doc);
    } catch (error) {
        // Handle errors
        console.log(error)
        res.status(500).json(error.message || "Internal Server error");
    }
}

// Controller function for user login
const loginUser = async (req, res, next) => {
    try {
        const { emailId, password } = req.body;
        console.log(emailId,password);
        // Find user by email
        const user = await User.findOne({ emailId });
        if (!user) {
            throw new Error("User not registered.");
        }

        // Check if the entered password matches the saved one
        const savedPass = user.password;
        const check = await bcrypt.compare(password, savedPass);
        if (!check) {
            throw new Error("Wrong credentials");
        }

        // Generate JWT token
        const token = await jwt.sign({ userId: user._id }, "anconsoncoe");
        return res.status(200).cookie("accessToken", token).json({ ...user, password: null });
    } catch (error) {
        // Handle errors
        res.status(error.status || 500).json(error.message || "Internal Server Error");
    }
}

export { testingController, registerUser, loginUser };
