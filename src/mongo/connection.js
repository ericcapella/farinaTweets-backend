const mongoose = require("mongoose")
require("dotenv").config()

const databaseURL = process.env.DATABASE_URL

mongoose.connect(databaseURL)

const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("connected to database"))
