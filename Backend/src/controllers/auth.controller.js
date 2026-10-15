const UserModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * @name registerUsercontroller
 * @desc Register a new user, expect username, email, and password in the request body   
 * @access Public
 */


async function registerUsercontroller(req, res) {
    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        return res.status(400).json({ 
            message: 'Please provide username, email, and password' 
        });
    }

    const isUserAlreadyExists = await UserModel.findOne({ 
        $or: [{ username }, { email }]
    });
    
    if(isUserAlreadyExists) {
        return res.status(400).json({
            message: 'Account already exists with this email address or username'
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
        username,
        email,
        password: hashedPassword
    });

    const token =  jwt.sign(
        {id: user._id,username: user.username},
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    )
    res.cookie('token', token)
    res.status(201).json({
        message: 'User registered successfully',
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })


}


/**
 * @name loginUsercontroller
 * @desc Login a user, expect email and password in the request body   
 * @access Public
 */

async function loginUsercontroller(req, res) {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if(!user) {
        return res.status(400).json({
            message: 'Invalid email or password'
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid) {
        return res.status(400).json({
            message: 'Invalid email or password'
        })
    }

    const token =  jwt.sign(
        {id: user._id,username: user.username},
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    )

    res.cookie('token', token)
    res.status(200).json({
        message: 'User logged in successfully',
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })


}


module.exports = {
    registerUsercontroller,
    loginUsercontroller
}