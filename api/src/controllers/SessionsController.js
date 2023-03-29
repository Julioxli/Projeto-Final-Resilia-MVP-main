import jwt from 'jsonwebtoken'
import User from '../models/User'
import bcrypt from 'bcryptjs'
// import { checkPassword } from '../services/auth'
import authConfig from '../config/auth'
import { Database } from "../database/index"

class SessionsController {
//     async create(req,res){
//         const { email, password} = req.body
//         const user = await User.findOne({
//             email,
//         })
//         if(!user){
//             return res.status(401).json({
//                 error: "User or Password invalid."
//             })
//         }

//         // if(!checkPassword(user,password)){

//         //     return res.status(401).json({
//         //         error:"User or Password invalid"
//         //     })
//         // }
//         const checkPassword =
//         bcrypt.compare(password, user.password, (err, data) => {
//             //if error than throw error
//             if (err) throw err
    
//             //if both match than you can do anything
//             if (data) {
//                 console.log({ msg: "Login success" })
//                 const { id } = user
//                         return res.json({
//                             user:{
//                                 id,
//                                 email
//                             },
//                             token: jwt.sign({ id }, authConfig.secret,{
//                                 expiresIn: authConfig.expiresIn,
//                             })
//                         })
//             } else {
//                 console.log({ msg: "Invalid credencial" })
//             }
//             return true
//         })
//         console.log('ue',checkPassword)

       
//     }
 async  create(req,res){
    try {
      const {email,password} = req.body
      let userPasswordDB = ''
      let user = {}
      await Database().then((db)=>{
       return db.get("SELECT id,email,password FROM users WHERE email=?",[email])
      }).then((response)=>{
        userPasswordDB = response.password
        user = response 
        // console.log(response)
        // return res.status(200).json({
        //   message:"sessão pronta para ser criada"
        // })
      })
    //   console.log('userPasswordDB: senha no DB:', userPasswordDB)
    //   console.log('password: senha enviada no front:',password)
    //   console.log(user)
    //   const { id } = user
    //   console.log(id)
      const checkPassword = bcrypt.compare(password,userPasswordDB,(err,data)=>{
        if(err)throw err
        if(data){
            console.log({msg:"Login Sucess"})
            const { id } = user
            console.log(user)
            return res.json({
                user:{
                    id,
                    email
                },
                token:jwt.sign({id},authConfig.secret,{
                    expiresIn:authConfig.expiresIn,
                })
            })
        }else{
            console.log({msg:"Invalid Credential"})
        } return true
      })
    } catch (err) {
      console.error(err)
    }
  
  }
}
export default new SessionsController()