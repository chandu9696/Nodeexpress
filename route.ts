const express=require('express')

const app=express()
const route=express.Router()
const reqFilter=(req:any,res:any,next:any)=>
{
    if(!req.query.age){
        res.send('please provide age')
    }
    else
    {
        next()
    }

}
// app.use(reqFilter)
route.use(reqFilter)
app.get('/',(req:any,res:any)=>{
    res.send('this is first test nn')
})
app.get('/help',(req:any,res:any)=>{
    res.send('this is help')
})
route.get('/about',(req:any,res:any)=>{
    res.send('this is about')
})
app.use('/',route)
app.listen(5001,()=>{console.log('here in express')})