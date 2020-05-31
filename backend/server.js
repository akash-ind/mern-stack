const express= require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');



require('dotenv').config();

const app=express();
const port = process.env.PORT|| 5000;

app.use(cors());
app.use(express.json());

const uri =process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true})
	.then(()=>console.log("Connection Setup successfully"))
	.catch(err=> console.log(`Error ${err}`));

const connection = mongoose.connection;
//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

const techsRouter= require('./routes/techs');
const usersRouter= require('./routes/users');
const hacksRouter= require('./routes/hacks');

app.use('/techs',techsRouter);
app.use('/users',usersRouter);
app.use('/hacks',passport.authenticate('jwt',{session: false}),
	hacksRouter);

app.listen(port, ()=>{
	console.log(`Server running on Port: ${port}`);
});