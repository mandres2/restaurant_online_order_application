const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
/* const User = require("../../models/User"); */
const BusinessOwner = require("../../models/BusinessOwner");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register-business", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  BusinessOwner.findOne({ email: req.body.email }).then(businessOwner => {
    if (businessOwner) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newBusinessOwner = new BusinessOwner({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        businessName: req.body.businessName,
        businessAddress: req.body.businessAddress
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newBusinessOwner.password, salt, (err, hash) => {
          if (err) throw err;
          newBusinessOwner.password = hash;
          newBusinessOwner
            .save()
            .then(businessOwner => res.json(businessOwner))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  BusinessOwner.findOne({ email }).then(businessOwner => {
    // Check if businessOwner exists
    if (!businessOwner) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, businessOwner.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: businessOwner.id,
          name: businessOwner.name,
          email: businessOwner.email
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
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

module.exports = router;
