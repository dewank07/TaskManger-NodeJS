const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config()


// middleware

app.use(express.static('./public'))
app.use(express.json());

app.use('/api/v1/tasks',tasks );

const port = process.env.PORT || 5000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
                app.listen(port, () => {
                    console.log(`Server is running on port ${port}`);
                });
    }
    catch(err){
            console.log(err);
        }
}

start();