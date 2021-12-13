const mongoose = require('mongoose')


async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT,(e)=>{
            console.log('connect success try');
          })
          console.log('connect success');
    }catch (error){
        console.log('fail');
    }
}


module.exports = { connect };