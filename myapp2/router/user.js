import express from "express"
import { addUser, getUser } from "../controller/user.js"
const router=express.Router()
router.get("/name",getUser)
router.post("/", addUser)
export default router
