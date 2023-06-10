const mongoose = require("mongoose");
const mongoString = "mongodb://localhost:27017/refrain-addiction";
mongoose.connect(
  `mongodb+srv://refrain-addiction:codetogivehack@cluster0.yzcnusv.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected!");
});

const dataSchema = new mongoose.Schema({
  web_arr: {
    type: Array,
    items: {
      type: String,
    },
  },
});

const coll = mongoose.model("coll", dataSchema);

module.exports = coll;
