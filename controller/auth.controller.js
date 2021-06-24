import db from '../model/index.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import {secret} from '../config/auth.config.js'
const User = db.user
const Role=db.role

export const signup=(req, res)=>{
    const user = new User({
        username: req.body.username,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    user.save((err, user)=>{
        if(err){
            res.status(500).send({
                message : err.message
                
            })
            return
        }
        //roles?
        if(req.body.roles){
            Role.find({name:{$in: req.body.roles}}, (err, roles)=>{
                if(err){
                    res.status(500).send({
                        message : err.message
                    }) 
                    return
                }
                //roles exists
                user.roles= roles.map(role=>role._id);
                console.log(user)
                user.save(err=>{
                    if(err){
                        res.status(500).send({
                            message : err.message
                        }) 
                        return
                    } 
                    //res
                    res.status(201).send({message:"User registered"}) 
                })


            })
        }else{
            console.log("going to add default role")
            Role.find({name:"user"}, (err, role)=>{
                if(err){
                    res.status(500).send({
                        message : err.message
                    }) 
                    return
                }
                //roles exists
                user.roles= [role[0]._id];
                console.log(role)
                console.log(role[0]._id)
                
                user.save(err=>{
                    if(err){
                        res.status(500).send({
                            message : err.message
                        }) 
                        return
                    }
                    res.status(201).send({message:"User registered with default role"})   
                })


            })
        }
    })
}
export const signin=(req, res)=>{
    console.log("starting sign in")
    User.findOne({
        username:req.body.username
    }).then((user)=>{
        if(!user){
            return res.status(404).send({message:"User Not Found"})
        }
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
        if(!passwordIsValid){
            return res.status(401).send({
                message:"Invalid Password"
            })
        }
        //token
        var token=jwt.sign({id:user.id}, secret, {
         expiresIn:86400//24hrs   
        })
        //
        res.status(200).send({
            username:user.username,
            token:token
        })

    }).catch(err=>{
        res.status(500).send({
           message:err.message
        })
    })
}