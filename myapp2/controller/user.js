export const getUser=(req, res)=>{
    console.log("I am in getUser function")
    res.status(200).send("Rahul")
}
export const addUser=(req, res)=>{
    console.log("I am  in addUser function")
    console.log(req)
    console.log(req.body)
    res.status(201).send({
        message:"Your data got saved"
    })
}