const app =require("./app");
const config =require("./app/config");
const mongoose = require("mongoose");

mongoose.connect(config.db.uri)
    .then(() => {
        console.log("connected to the database");
    })
    .catch((error)=>{
        console.log("cannot connect to the database!",error);
        process.exit();
    });

const PORT = config.app.port;

app.listen(PORT, () =>{
    console.log(`Server in ruing on port ${PORT}.`);
});