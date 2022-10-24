const mongoose = require('mongoose');

async function startConnection(connectionString){
    try{
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = startConnection;