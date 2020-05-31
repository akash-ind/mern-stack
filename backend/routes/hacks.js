const router=require("express").Router();
const Hackathon=require("../models/hackathon.model");
const Team=require("../models/team.model");
//This will show you all the available hackathons to come.
router.route("/").get((req,res)=>
{
	Hackathon.find({date:{gte:Date.now})
		.then(hacks=>res.json(hacks))
		.catch(err=>res.status(err.status).json("Error: "+ err));
});

router.route("/:id").get((req,res)=>{
	Hackathon.findById(req.params.id)
		.then(hack=> res.json(hack))
		.catch(err=> res.status(err.status).json("Error: "+ err))
});

router.route("/add").post((req.res)=>{
	const name= req.body.name;
	const date= Date.parse(req.body.date);
	const duration= req.body.duration;

	newHackathon= new Hackathon({
		name:name,
		date:date,
		duration:duration,
	});
	newHackathon.save()
	.then(()=>res.json("Hackathon Created"));
	.catch(err=>res.status(err.status).json("Error: "+ err));
});

router.route("/:id/create-team").post((req,res)=>{
	const name=req.body.name;
	//here I should get the user
	const createdBy=loggedInUser;
	newTeam= new Team({
		name:name,
		createdBy:createdBy
	})

	newTeam.save()
		.then(()=>res.json("Team Created"));
		.catch(err=>res.status(err.status).json("Error: "+ err));

	Hackathon.findById(req.params.id).
	.then(hack=>{
		hack.teams.append(newTeam);
		hack.save()
		.then(()=>res.json("Team Added"))
		..catch(err=>res.status(err.status).json("Error: "+ err));
		console.log("New Team Added");
	})
	.catch(err=>res.status(err.status).json("Error: "+ err));
})
