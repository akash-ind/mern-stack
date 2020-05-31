const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const techSchema=new Schema({
	tech_name:{ type: String, required: true, unique: true},
	users:[{type: Schema.Types.ObjectId, ref:'User'}]
});

const Tech=mongoose.model('Tech',techSchema);

module.exports= Tech;