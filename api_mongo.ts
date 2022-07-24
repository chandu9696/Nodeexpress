const express=require('express')

const app=express()
// const route=express.Router()
const dbConnect=require('./connectmongodb')
let cors = require('cors')
// app.configure(function(){
//     app.use(express.bodyParser());
//   });
app.use(express.json())
app.use(cors())
app.get('/',async(req:any,res:any)=>{
  

    res.send("Api connected to mongo")
})
app.get('/api/getproduct',async(req:any,res:any)=>{
  
    let db=await dbConnect()
    let acu=await db.find({}).toArray()
    res.send(acu)
})
app.post('/api/insert',async(req:any,res:any)=>{
  
    let db1=await dbConnect()
    let acu1=await db1.insert(req.body)
    console.log(req.body)
    res.send(acu1)
})
// app.use('/',route)

//Similary we can use put to update data 
//Recommended approch is to use put but similar can be done using
app.listen(process.env.PORT ||6000,()=>{console.log('api running')})