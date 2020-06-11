mongooseCONNECT = (mongoose, db) => {
    mongoose
        .connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err))
}

module.exports = mongooseCONNECT;
