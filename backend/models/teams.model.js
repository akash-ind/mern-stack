const mongoose=require('mongoose');
const Schema=mongoose.Schema;

teamSchema=new Schema({
	name:{type: String, required:true},
	createdBy:{type: Schema.Types.ObjectId, ref:"User"},
	members:[{type: Schema.Types.ObjectId, ref:"User"}],
},
{
	timestamp:true
});

const Teams=mongoose.model('Teams',teamSchema);

module.exports= Teams