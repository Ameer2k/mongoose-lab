
const mongoose = require('mongoose');

async function connectToTheDataBase(){
  try {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log('connected to the database');
    
  } catch (error) {
    console.log('ERROE: ', error);
    
  }
  
}
module.exports= connectToTheDataBase

