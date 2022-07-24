import * as http from 'http';
const express=require('express')
const data=require('./data')
const server=http.createServer((request,response)=>{
    if(request.url==='/')
    response.writeHead(201,{'Content-Type':'application/json'})
    response.write(JSON.stringify(data))

    response.end();

})
server.listen(process.env.PORT || 3000,()=>{console.log('here in a')})