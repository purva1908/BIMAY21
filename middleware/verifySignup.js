import db from '../model/index.js'
const ROLES=db.ROLES
const User=db.user
export const checkDuplicateUsernameOrEmail=(req, res, next)=>{
    User.findOne({
        username: req.body.username
    }).exec((err, result)=>{
        if(err){
            res.status(500).send({
                message:err
            })
            return
        }//1 - 5
        if(result){//result (i.e, user) and if result is not null that means we have the user already in the DB
            
            res.status(409).send({
                message:"User already Exist:    "+result    
            })
        }
        //Now check email
        User.findOne({
            email: req.body.email
        }).exec((err, result)=>{
            if(err){
                res.status(500).send({
                    message:err
                })
                return
            }//1 - 5
            if(result){//result (i.e, user) and if result is not null that means we have the user already in the DB
                
                res.status(409).send({
                    message:"Email already Exist:    "+result    
                })
            }
            //go for next
            next();
        })
    })
}

export const checkRolesExisted=(req, res, next)=>{
    if(req.body.roles){
        for(let i=0;i<req.body.roles.length;i++){
            if(!ROLES.includes(req.body.roles[i])){
                res.status(400).send({
                    message:`${req.body.roles[i]} does not existed`
                })
                return;
            }
        }
    }
    //
    next()
}
