import { DbUser, User } from "../model/user.js";
import { Router } from "express";

const jwt = require('jsonwebtoken')

const jwtSecret = '2a5bb92fa44b6fad7bfc55200ae27a36237250ca08daae06183a2201a42dde99fc8cb2';

const authRoutes = Router();


// TODO add JWT
// TODO proxy to check JWT 
// TODO add authorizations by profile
// TODO store token on front end storage 
// TODO frontend proxy to apply token on header of api calls
// TODO add operation to register users
// TODO hash passwords
// TODO add login page on front end

authRoutes.post("/login", async (req: any, res: any, next: any) => {
    try {
      const { username, password } = req.body
      // Check if username and password is provided
      if (!username || !password) {
        return res.status(400).json({
          message: "Username or Password not present",
        })
      }
      const user = await DbUser.findOne({ username, password })
      if (!user) {
        res.status(401).json({
          message: "Login not successful",
          error: "User not found",
        })
      } else {
        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
          { id: user._id, username, role: user.role },
          jwtSecret,
          {
            expiresIn: maxAge, // 3hrs in sec
          }
        );
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: maxAge * 1000, // 3hrs in ms
        });
        res.status(200).json({
          message: "Login successful",
          user,
        })
      }
    } catch (error: any) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
  }
);

export default authRoutes;