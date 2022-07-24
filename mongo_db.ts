// const {MongoClient}=require('mongodb')

// const url='mongodb://localhost:27017';

// const client =new MongoClient(url)
const dbConnect=require('./connectmongodb')

async function Data()
{
    // let data=await client.connect();
    // let db=data.db('products').collection('product')
    // let res=db
    let db=await dbConnect()
    let acu=await db.find({}).toArray()
    // console.log(acu)
}

Data()
async function Insert() {

     let db=await dbConnect()
     let result=await db.insert([{name:'Realme',modal:'Realme 8',price:2000,category:'small_scale'},
     {name:'Nokia',modal:'Nokia 8',price:20900,category:'small_scale'}
    ])
     console.log(result.result.ok)
}
Insert()

// Now note few points here 
// we are not see update pass two object, delete operation they are pretty similar to above