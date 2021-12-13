module.exports = {
    mutipleMongooseObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongoooseToObject : function ( mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}