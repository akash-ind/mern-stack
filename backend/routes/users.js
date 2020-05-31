const express = require("express");
const router=require('express').Router();
const bcrypt= require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

//Loading input Validation

const validateRegisterInput= require("../validation/register");
const validateLoginInput= require("../validation/login");

// Load User model
const User = require("../../models/User");
router.post("/register", (req, res) => {

//form validation
const { errors, isValid }=validateRegisterInput(req.body);

//check validation
	if(!isValid){
		return res.status(400).json(errors);
	}
	User.findOne({email: req.body.email }).then(user=>{
		if(user){
			return res.status(400).json({email:" Email already exists"});
		}
		else{
			const newUser=new User({
				name:req.body.name,
				email:req.body.email,
				password:req.body.password,
      });
			//First hash before saving passwords
			bcrypt.genSalt(10,(err,salt)=>{
				bcrypt.hash(newUser.password,salt,(err,hash)=>{
				if(err) throw err;
				newUser.password = hash;
				newUser.save()
				.then(user => res.json(user))
				.catch(err => console.log(err));
				})
			});
		}
	});
/*
	}).catch(err=>console.log(err));
"from master commented during merge" 
*/
});

//for login
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.route("/login").post((req, res) => {
  const {errors, isValid}=validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
/*
        };// Sign token
        jwt.sign(
          payload,
          process.env.secretOrKey,
"from master commented during merge" 
*/
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

/*

COMMENTED BY MICHELLE

router.route("/add-skills").post((req, res)=>{
	const skills=req.body.skills
	//Here I should Get somehow the User=>name loggedInUser
	loggedInUser.skills=[...loggedInUser.skills, ...skills];
	loggedInUser.save()
	.then(()=>res.json("Skills Added"))
	.catch(err=> res.status(err.status).json("Error: "+ err));
});

router.route("/add-interests").post((req,res)=>{
	const interests=req.body.interests
	//Here I should Get somehow the User=>name loggedInUser
	loggedInUser.interests=[...loggedInUser.interests, ...interests];
	loggedInUser.save()
	.then(()=>res.json("Interest Added"))
	.catch(err=> res.status(err.status).json("Error: "+ err));
});
*/
module.exports=router;
