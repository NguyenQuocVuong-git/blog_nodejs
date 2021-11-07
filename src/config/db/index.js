const mongoose = require('mongoose')


async function connect() {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@node.qt1ed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",(e)=>{
            console.log('connect success try');
          })
          console.log('connect success');
    }catch (error){
        console.log('fail');
    }
}


module.exports = { connect };