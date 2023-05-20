const moongoose = require('mongoose');

const connectDB = (url) => {
    return moongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

}

module.exports = connectDB;