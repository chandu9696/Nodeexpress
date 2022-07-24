const express=require('express')

const app=express()
app.set('view engine','ejs')
app.get('/',(req:any,res:any)=>{
    res.send('this is first test')
})
app.get('/help',(req:any,res:any)=>{
  
    const user={name:'ram',city:'dubai'}
    res.render('about',{user})

 
})

app.listen(5000,()=>{console.log('here in express')})