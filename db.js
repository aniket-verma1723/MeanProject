// Module calling 
const mongoose = require("mongoose"); 
  
// Server path 
const url = 'mongodb://localhost:27017/CrudDB'; 
  
// Name of the database 
const dbname = "CrudDB"; 
  
mongoose.connect(url, (err,client)=>{ 
    if(!err) { 
        console.log("successful connection with the server");   
    } 
    else
        console.log("Error in the connectivity"); 
});
module.exports = mongoose;






// const mongoose = require('mongoose');

// // URL at which MongoDB service is running
// var url = "mongodb://localhost:27017/CrudDB";
 
// // A Client to MongoDB
// var MongoClient = require('mongodb').MongoClient;
 
// // Make a connection to MongoDB Service
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Connected to MongoDB!!!!!!!!!!");
//   db.close();
// });

// module.exports = mongoose;