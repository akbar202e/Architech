const query = require("../database")

const getUser = async (req,res) => {
    try {
        const data = await query('select id_user, fullName, email, hp, password from user')
        return res.status(200).json({data});
    } catch (error) {
        return res.status(400).json({message:error})
    }
}

const createUser =async (req,res) =>{
    const {fullName,email,hp,password} = req.body
    try {
        const result = await query('insert into user(fullName,email,hp,password) values (?,?,?,?)', [fullName,email,hp,password])
        res.status(200).json({result})
    } catch (error) {
        res.status(400).json({message:error})
    }
}

module.exports ={getUser,createUser}