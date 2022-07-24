
const { MongoClient, ServerApiVersion } = require('mongodb');
import dotenv from 'dotenv';

dotenv.config()
const url=process.env.MONGODB_URL;
console.log(url)

const client =new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

async function getData()
{
    let data=await client.connect();
    let db=data.db('products').collection('product')
    return db
}
module.exports=getData;