import connectDB  from '../DB/connection.js';
import cors from 'cors';
const initApp= async(app,express)=>{
   app.use(cors());
   connectDB();
    app.use(express.json());   

    app.use((err,req,res,next)=>{
    return  res.status(err.statusCode).json({ msg: err.message });
    });
}
export  default initApp