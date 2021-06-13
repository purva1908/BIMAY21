import express from "express"
import { addUser, getUser } from "../controller/user.js"
const router=express.Router()
router.get("/",addUser)
router.post("/", getUser)
// router.delete("/", addUser)
// router.put()
// router.patch()
export default router
