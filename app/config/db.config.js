const config = require('./config.json');

const mongoose = require('mongoose')

const connectionString = config.database

exports.connect = async () => {
  try {
    const config = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
    console.log("Loading: Mongo Connection");
    
    await mongoose.connect(connectionString, config)
    console.log("Connected to database")

  }
  catch (error) { console.log(error.message) }
}
