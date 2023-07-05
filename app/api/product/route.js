import {MongoClient} from "mongodb"
import { NextResponse } from "next";

// export async function GET(request){
   

// // Replace the uri string with your connection string.
// const uri = "mongodb+srv://stock:nexk0zbtTfyzdJjd@stockmanage.ghxehdr.mongodb.net/";

// const client = new MongoClient(uri);
//   try {
//     const database = client.db('stockmanage');
//     const inventory = database.collection('inventory');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const allproducts = await inventory.findOne(query);

//     console.log(movie);
//     return NextResponse.json({allproducts})
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }




// }



export async function POST(request){
   

  const uri = "mongodb+srv://stock:nexk0zbtTfyzdJjd@stockmanage.ghxehdr.mongodb.net/";
  const client = new MongoClient(uri);
    let body = request.body;
    
      try {
          const database = client.db('stock');
          const inventory = database.collection('inventory');
  
          const product = await inventory.insertOne(body);
        return NextResponse.json({product, ok:true})
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    
    
    
    
    }