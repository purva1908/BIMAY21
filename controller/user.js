var name="Rahul"
export const getUser=(req, res)=>{
    console.log("I am in getUser function")
    res.status(200).send(name)
}
export const addUser=(req, res)=>{
    console.log("I am  in addUser function")
    name=req.body.name
    console.log(req.body.name)
    res.status(201).send({
        message:"Your data got saved"
    })
}