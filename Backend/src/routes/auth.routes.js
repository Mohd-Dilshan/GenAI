const { Router } = require('express');
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware');

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

authRouter.post('/register', authController.registerUsercontroller);

/**
 * @route POST /api/auth/login
 * @description Login a user with email and password
 * @access Public
 */
authRouter.post("/login",authController.loginUsercontroller);


/**
 * @route GET /api/auth/logout
 * @description clear token from cookie and add it to blacklist
 * @access Public
 */
authRouter.get("/logout", authController.logoutUserController);


/**
 * @route GET /api/auth/getme
 * @description Get the current user details
 * @access Private
 */
authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController);


module.exports = authRouter;


