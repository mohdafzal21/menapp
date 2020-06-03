const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin123@ds251618.mlab.com:51618/cb2020', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("DB is connected"))
.catch((err)=> console.log(err))

const USERS = require('./users')

module.exports = {
    USERS
}