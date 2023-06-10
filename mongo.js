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

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const dataSchema = new mongoose.Schema({
  web_arr: {
    type: Array,
    items: {
      type: String,
    },
  },
});

const new2 = new mongoose.Schema({
  QuizInfo:{
    type: Map,
    required: true,
  },
})

const collection = mongoose.model("collection", newSchema);
const coll = mongoose.model("coll", dataSchema);
const col2 = mongoose.model("QuizInfo", new2);



module.exports = {collection, coll, col2};
// module.exports = { collection };


