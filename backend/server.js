const express= require('express');

//const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require("body-parser");

const users = require("./routes/api/users");

//require('dotenv').config();

const app=express();
// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
	  extended: false
	})
  );
  app.use(bodyParser.json());

  // DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

/*

COMMENTED BY MICHELLE

app.use(cors());
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');



require('dotenv').config();

const app=express();
const port = process.env.PORT|| 5000;

app.use(cors());
app.use(express.json());

const uri =process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once('open',()=>{
	console.log("MongoDb connection setup successfully");	
});
*/

//passport middleware
app.use(passport.initialize());

//passport config

require("./config/passport")(passport);


// Routes
app.use("/api/users", users);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

/*
COMMENTED BY MICHELLE

const techsRouter= require('./routes/techs');

const techsRouter= require('./routes/techs');

const usersRouter= require('./routes/users');

app.use('/techs',techsRouter);
app.use('/users',usersRouter);

app.listen(port, ()=>{
	console.log(`Server running on Port: ${port}`);
});

*/