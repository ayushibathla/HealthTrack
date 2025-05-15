const mongoose = require("mongoose")

const dbName = process.env.DB
mongoose.connect(`mongodb+srv://khushibathla91:qwertyuiop@cluster0.p7akh9s.mongodb.net/${dbName}`)
    .then(console.log(`Established a connection to the database ${dbName}`))
    .catch(err => console.log("Something Went wrong when connecting to the DB ", err))