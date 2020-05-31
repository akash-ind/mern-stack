const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hackathonSchema=new Schema({
	name:{ type: String, required: true},
	description:{ type: String},
	date:{ type: Date },
	teams:[{type: Schema.Types.ObjectId, ref:"Teams"}],
	duration:{ type: String}
},
{
	timestamps:true
}
);

const Hackathon=mongoose.model('Hackathon', hackathonSchema);

module.exports= Hackathon;