import {MongoClient} from "mongodb"
import { NextResponse } from "next/server";

export async function GET(request){
   

// Replace the uri string with your connection string.
const uri = "mongodb+srv://stock:nexk0zbtTfyzdJjd@stockmanage.ghxehdr.mongodb.net/";

const client = new MongoClient(uri);


  try {
    const database = client.db('stockmanage');
    const movies = database.collection('inventory');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
    return NextResponse.json({"a":34,movie})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }




}