import mongoose from 'mongoose'
import user from './user.model.js'
import role from './role.model.js'
mongoose.Promise=global.Promise
const db=[]
db.mongoose=mongoose
db.user=user;
db.role=role;
db.ROLES=["user", "admin", "moderator"]//this will be used for verifying the user input while signup

export default db