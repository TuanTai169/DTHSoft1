const router = require("express").Router()
const argon2 = require("argon2")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

require("dotenv").config()

// @route POST api/auth/register
// @decs Register user
// @access public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body

  //Simple validation
  if (!name || !email || !password)
    return res.status(400).json({
      success: false,
      message: "Please fill all mandatory fields",
    })

  try {
    //Check for existing email
    const user = await User.findOne({ email })
    if (user)
      return res.status(400).json({
        success: false,
        message: "Email already taken",
      })

    //All good
    const hashedPassword = await argon2.hash(password)
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    })
    await newUser.save()

    //Return Token JWT
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    )
    res.json({
      success: true,
      message: "User created successfully",
      accessToken,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
})

// @route POST api/auth/login
// @decs Login user
// @access public
router.post("/login", async (req, res) => {
  const { email, password } = req.body

  //Simple validation
  if (!email || !password)
    return res.status(400).json({
      success: false,
      message: "Please fill all mandatory fields",
    })

  try {
    // Check for existing email
    const user = await User.findOne({ email })

    if (!user)
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      })

    // Email found
    const passwordValid = await argon2.verify(user.password, password)
    if (!passwordValid)
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      })

    //All good
    //Return Token JWT
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    )
    res.json({
      success: true,
      message: "User logged in successfully",
      accessToken,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
})

module.exports = router
