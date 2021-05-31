import pgdb from './models/index.js';
const ROLES = pgdb.ROLES
const User = pgdb.users;

checkDuplicateUsernameOrEmail = (req, res, next)=>{
// check Username 
    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(
        user => {
            if(user){
                req.status(400).send({
                    message: "Failed! Username already exist"
                })
                return;
            }
            User.findOne({
                where:{
                    email: req.body.email
                }
            }).then(
                user=>{
                    if(user){
                        req.status(400).send({
                            message: "Failed! Username already exist"
                        })
                        return;
                    }
                    next();
                }

            )
        }

    )
}
checkRolesExisted = ()=>{
    if(req.body.roles){
        for(let i=0;i<req.body.roles.length;i++){
            if(!ROLES.includes(req.body.roles[i])){ //ROLES.includes(req.body.roles[i]) ==false
                res.status(400).send({
                    message: "Failed! Role does npt exist "+req.body.roles[i]
                })
                return;
            }
        }
    }
    next();
}
export default verifySignUp = {
    checkDuplicateUsernameOrEmail : checkDuplicateUsernameOrEmail,
    checkRolesExisted : checkRolesExisted
}