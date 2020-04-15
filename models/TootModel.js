const mongoose = require("mongoose")

mongoose.Promise = global.Promise
const url = "mongodb://localhost:27017/toot"
mongoose.connect(url)

mongoose.connection.on('open', () => {
    console.log('Connected to mongodb server.');
    mongoose.connection.db.listCollections().toArray(function (err, names) {
      console.log(names);
     });
  })

const Schema = mongoose.Schema

const tootSchema = new Schema({
    toot: String,
    author: String
})

const TootModel = mongoose.model("Toot", tootSchema)

module.exports = {
    getToots: () => TootModel.find().sort({ _id: -1 }),
    getToot: _id => TootModel.findOne({ _id }),
    createToot: args => TootModel(args).save(),
    deleteToot: args => {
        const { _id } = args

        TootModel.remove({ _id }, error => {
            if (error) {
                console.log("Error Removing: ", error)
            }
        })
        
        return args
    },
    updateToot: args => {
        const { _id, toot } = args

        TootModel.update(
            { _id },
            {
                $set: { toot }
            },
            { upsert: true },
            error => {
                if (error) {
                    console.log("Error Updating: ", error)
                }
            }
        )

        args.author = "User001" // the archytype user

        return args
    }
}