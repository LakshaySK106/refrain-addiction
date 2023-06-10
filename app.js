const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
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
    type: Number,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
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
      res.json('notexist');
      await Consultant.insertMany([data]);
    }
  } catch (e) {
    res.json('fail');
  }
});

app.listen(8000, () => {
  console.log('Port Connected!');
});
