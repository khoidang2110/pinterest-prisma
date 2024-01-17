import express from 'express';
import rootRoutes from './src/routes/rootRoutes.js';
import cors from 'cors';

const app = express();
const port = 8080;



app.use(express.json());
app.use(cors()); // cho tất cả các request từ bên ngoài vào( front end) để trước rootroutes để bypass (backend chạy từ trên xuống)
app.use(rootRoutes);


app.get("/",(req,res)=>{
    res.send("Hello node38  pinterest");
})



app.listen(port,()=> {
    console.log(`BE starting with port ${port}`)
})



// npm install cloudinary multer multer-storage-cloudinary
// cloudinary -> lib giúp mình tương tác vs cloudinary server
// multer -> lib giúp mình lấy dc file từ local
// multer-storage-cloudinary -> lib trung gian giúp mình upload file từ local lên cloudinary server 

// npm i prisma @prisma/client

//prisma -> orm
// prisma/client -> lib giúp mình tương tác với DB thông qua prisma
// B1: init prisma
// npx prisma init - yarn prisma init

//B2: pull modal từ mysql 
// npx prisma db pull - yarn prisma db pull

//B3: tạo prisma client đe tuong tac voi sql
//npx prisma generate - yarn 

//B4: copy code từ terminal và sử dụng:
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()