const express = require('express')
const app = express()
const port = 3001
const secretKey = 'test1'
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

app.use(express.json())

mongoose
  .connect('mongodb+srv://alexey:1834659sb@cluster0.n4xtv.mongodb.net/easycode',
    {
      useNewUrlParser: true,
    })
  .then(() => console.log('MongoDb ok'))
  .catch(() => console.log('MongoDb error'))

const UserSchema = new mongoose.Schema({
  userPhone: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
});

const CreateSchema = new mongoose.Schema({
  fruit: {
    type: String,
    required: true,
  },
  txtarea: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  radio: {
    type: String,
    required: true,
  }
});

const User = mongoose.model('Auths', UserSchema);
const MyForm = mongoose.model('MyForm', CreateSchema);

app.listen(port, () => {
  console.log(`Server starting on ${port}`)
})

app.get('/auth', cors(), (req, res) => {
  console.log(req.body)
  User.find()
    .then(user => res.send(user))
    .catch(err => res.send(err));
})

app.post('/login', cors(),
  async (req, res) => {
    try {
      const { userPhone, userPassword } = req.body
      const user = await User.findOne({ userPhone })

      if (!user) {
        return res.status(404).json({ message: "User not found" })
      }
      const passwordValid = await User.findOne({ userPassword })
      if (!passwordValid) {
        return res.status(400).json({ message: "Password valid!" })
      }

      const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' })
      return res.json({
        token,
        user: {
          id: user.id,
          userPhone: user.userPhone
        }
      })
    } catch (err) {
      console.log(err)
      res.send({ message: 'server error' })
    }
  })

  app.get('/forms', cors(), (req, res) => {
    MyForm.find()
      .then(user => res.send(user))
      .catch(err => res.send(err));
  })

  app.post('/create-form', cors(), (req, res) => {
    console.log(req.body)
    MyForm.create({
      fruit: req.body.fruit,
      txtarea: req.body.txtarea,
      city: req.body.city,
      radio: req.body.radio,
    })
    .then(user => res.send(user))
    .catch(err => res.send(err));
    if (!req.body) return res.sendStatus(400)
  })

app.use(cors())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
})