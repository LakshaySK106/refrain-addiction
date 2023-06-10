require("dotenv").config();
const express = require("express");
const collection = require("./mongo");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({
      email: email,
      password: password,
    });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/register", async (req, res) => {
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
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});

app.use("/api/routes", routes);

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('frontend/build'));
// }

app.listen(8000, () => {
  console.log("Port Connected!");
});
