import React, { Component } from 'react';
import axios from "axios";

class ListHackathons extends Component{
	constructor(props){
		super(props);
		this.state={
			hackathons:[],
		}
		this.componentDidMount=this.componentDidMount.bind(this);
	}
	componentDidMount()
	{
		const token = localStorage.jwtToken
		axios.get("hacks/",{ headers: {"Authorization" : `Bearer ${token}`} })
		.then((hacks)=>{
			this.setState({
				hackathons:[...hacks]
			});
		})
		.catch(err=>console.log("some error occured"));
	}

	render(){
		const hackathons=this.state.hackathons;
		return(
			<div className="container">
				{this.state.hackathons.map((hack)=>(
					<div className="row">
					<div className="col">
					<p>hack.name</p>
					<p>hack.description</p>
					<p>hack.date</p>
					<p>hack.duration</p>
				</div>
				</div>))}
			</div>
		)
	}
}

export default ListHackathons;