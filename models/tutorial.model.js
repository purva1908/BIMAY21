const tutorial= (sequelize, Sequelize)=>{
    const Tutorial = sequelize.define("tutorial", {
        title:{
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published:{
            type: Sequelize.BOOLEAN
        }
    }, {
    
       timestamps:true
    })
    return Tutorial;
}
export default tutorial