const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name:{ type: String, required:true,
		trim:true, minlength:3},
	email:{ type: String, required: true, unique:true},
	skills:{ type: Schema.Types.ObjectId, ref: 'Tech'},	//Tech is our models
	interests:[{ type: Schema.Types.ObjectId, ref: 'Tech'}],	//containing the skills
	participating:[{ type: Schema.Types.ObjectID, ref: 'Hackathons'}],
	password:{ type: String, required: true},
	date: { type : Date, default: Date.now}
},
{ 
	timestamps:true
});

const User =mongoose.model('User', userSchema);

module.exports = User;