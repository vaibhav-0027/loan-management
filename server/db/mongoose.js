const mongoose = require("mongoose")

const uri = "mongodb+srv://vaibhav:my-pass@cluster0.ji5hu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// This method connects the server with mongoose database.
const connectDB = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })

    console.log("online db connected...")
}

module.exports = connectDB