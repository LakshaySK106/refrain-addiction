
require("dotenv").config();
const express = require("express");
const {collection, col2} = require("./mongo");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const mongoose = require('mongoose');
const mongoString = 'mongodb://localhost:27017/refrain-addiction';
mongoose.connect(
  `mongodb+srv://refrain-addiction:codetogivehack@cluster0.yzcnusv.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});
const consultantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Age: {
    type: String,
  },
  speciality: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isApproved: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const Consultant = mongoose.model('consultant', consultantSchema);
app.get('/', cors(), (req, res) => {});
app.get('/consultant', cors(), (req, res) => {});

app.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({
      email: email,
      password: password,
    });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
    }
  } catch (e) {
    res.json('fail');
  }
});
app.post('/consultant', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const check = await Consultant.findOne({
      email: email,
      password: password,
    });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
    }
  } catch (e) {
    res.json('fail');
  }
});
app.post('/registerc', async (req, res) => {
  const { name, email, speciality, password, age } = req.body;

  const data = {
    name: name,
    email: email,
    speciality: speciality,
    password: password,
    age: age,
    isApproved: false,
  };

  try {
    const check = await Consultant.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      await Consultant.insertMany([data]);
      res.json('notexist');
    }
  } catch (e) {
    res.json('fail');
  }
});

app.post('/register', async (req, res) => {
  const { name, email, city, college, password } = req.body;

  const data = {
    name: name,
    email: email,
    city: city,
    college: college,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json('fail');
  }
});

app.use('/api/routes', routes);

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('frontend/build'));
// }
app.post("/answers", async (req, res) => {
  const quizinfo =req.body.quizInfo;

  const data = {
    quizinfo: quizinfo,
  };

  console.log(data);
  try{
    await col2.insertMany([data])
      .catch((e) => {
        alert("wrong details");
        console.log(e);
      });
  } catch(e)
  {
    res.json("fail");
  }
});

app.listen(8000, () => {
  console.log('Port Connected!');
});
