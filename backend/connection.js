const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(`${process.env.DB_URI}`, () => {
  console.log("Connected to DB")
})
