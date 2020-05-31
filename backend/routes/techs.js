const router= require('express').Router();
let Tech=require('../models/tech.model');

router.route('/').get((req,res)=>{
	Tech.find()
		.then(techs=>res.json(techs))
		.catch(err=> res.status(err.status).json("Error: "+ err))
})

router.route('/:id').get((req,res)=>{
	Tech.findById(req.params.id)
		.then(tech=>res.json(tech))
		.catch(err=>res.status(err.status).json("Error: "+ err))
})

router.route('/add').post((req,res)=>{
	const tech_name=req.body.tech_name;
	newTech=new Tech(tech_name);
	newTech.save()
		.then(()=>res.json("Tech Added"))
		.catch(err=> res.status(err.status).json("Error: "+ err))
});

module.exports=router;