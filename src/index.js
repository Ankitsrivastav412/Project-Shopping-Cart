const express = require("express")
const mongoose = require("mongoose")
const multer = require("multer")

const route = require("./route/route")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(multer().any())

mongoose.connect("mongodb+srv://Ankitsrivastav412:G1fTVr3JcQfPfLGB@myfunctionup.f4mg0.mongodb.net/group-23Database?authSource=admin&replicaSet=atlas-rbbsrv-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use("/", route)

app.listen(3000, () => {
    console.log('Express app running on port 3000')
})
