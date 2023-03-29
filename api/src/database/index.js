// import mongoose from "mongoose"
// import config  from "../config/database"
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'


// class Database {
//     constructor(){
//         this.connection = mongoose.connect(
//             config.url,
//             {
//                 useNewUrlParser: true,  
//                 useUnifiedTopology:true,
//             }
//         )
//     }
// }
// export default new Database()

export async function Database () {
    return open({
      filename: './database.db',
      driver: sqlite3.Database
    })
  }