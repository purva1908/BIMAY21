import {checkDuplicateUsernameOrEmail, checkRolesExisted} from '../middleware/verifySignup.js' 

import {signin, signup} from "../controller/auth.controller.js"
import express from 'express'
const router=express.Router()

router.post("/signup",[checkDuplicateUsernameOrEmail,checkRolesExisted], signup)
router.post("/login",signin)
export default router

