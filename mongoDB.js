const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/node_db";
const client = new MongoClient(url);
const dbName = 'node_db';
const myObjJSON = {
    "first_name": "matan",
    "last_name": "zada",
    "email": "matan.zada1@gmail.com",
    "age": 22
}
const myPass = process.env.db_pass;

async function CreatingMongodb(myObjJSON) {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');
    const insertResult = await collection.insertMany([myObjJSON]);
}
CreatingMongodb(myObjJSON)

console.log(`my password is: ${myPass}`);