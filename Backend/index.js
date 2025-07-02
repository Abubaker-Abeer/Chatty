import express from 'express';
import initApp from './SRC/index.router.js';
const app=express();
const Port = process.env.Port || 3000;
initApp(app,express);
app.listen(Port,()=>{
    console.log(`server is running on port:${Port}`);
    
});