const express = require('express')
const multer = require('multer')
const path = require('path')

const app = express()
const cors = require('cors')

//上传文件的目录
const uploadDir = path.join(__dirname,'uploads')
//multer中间件处理文件上传
const upload = multer({dest:uploadDir})

app.use(cors())
app.post('/upload',upload.single('file'),(req,res)=>{
    if(!req.file){
        return res.status(400).send('No file exists')
    }
    res.send('file send successfully')
})
app.listen(4000,()=>{
    console.log('server start on http://localhost:4000');
})
   
