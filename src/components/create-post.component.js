import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post_event_name:'',
            post_event_description: '',
            post_event_date: '',
     //       post_team_members: [],
            post_max_members: '',
      //      post_owner: '',    we don't need it because Backend will automatically create that
           // post_date: '',    we don't need it because Backend will automatically create that
            post_open: '',
            post_duration: ''
        }
        this.onChangeEventName=this.onChangeEventName.bind(this);
        this.onChangeEventDescription = this.onChangeEventDescription.bind(this);
        this.onChangeEventDate = this.onChangeEventDate.bind(this);
    //    this.onAddMember = this.onAddMember.bind(this);
        this.onChangeOpenStatus = this.onChangeOpenStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
    }

    onChangeEventDescription(new_description) { // these are events, titled with 'onEvent' as in, they occur when the event occurs
        this.setState({
            post_event_description: new_description.target.value
        });
    }

    onChangeEventName(event) { //This is for changing the name of event
        this.setState({
            post_event_name: event.target.value
        });
    }

    onChangeEventDate(new_date) { // these are basically setters
        this.setState({
            post_event_date: new_date
        });
    }
   // Akash changed this out this
    onChangeDuration(e) { // these are basically setters
        this.setState({
            post_duration: e.target.value
        });
    }
/* Akash commented out
    onAddMember(new_member, status) {
        this.setState({
            post_team_members: new_member.target.value
        });
    }*/
    
    onChangeOpenStatus(open_status) {
        this.setState({
            post_open: open_status.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault(); // prevent default HTML code
        const hack={
            name:this.state.post_event_name,
            description:this.state.post_event_description,
            date:this.state.post_event_date,
            duration:this.state.duration,
        }
        axios.post("/hacks/add",{ hack })
        .then( res=>{
            console.log(res.data);
            console.log(res);
            )
        .catch(err=>console.log(err));

        console.log(`Post submitted:`);
        console.log(`Post Description: ${this.state.post_event_description}`);
        console.log(`Event Date: ${this.state.post_event_date}`);
        console.log(`Group Members: ${this.state.post_team_members}`);
        console.log(`Posted: ${this.state.post_date}`);
        console.log(`Availability: ${this.state.post_open}`);

        this.setState({
            post_event_description: '',
            post_event_date: '',
          //  post_team_members: [],
            post_max_members: '',
            post_owner: '',
          //  post_date: '',
            post_open: ''

        })
    }

    render() {
        return (
            <div>
                <div style = {{marginTop:15}}>
                    <h3>Create New Post</h3>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label>Event Name: </label>
                            <input type="text"
                                classname="form-control" name="date"
                                value={this.state.post_event_name}
                                onChange={this.onChangeEventName}
                                />
                        </div>
                                                
                        <div className="form-group">
                            <label>Event Date: </label>
                            <div>
                                <DatePicker 
                                selected={this.state.post_event_date}
                                onChange={this.onChangeEventDate}/>
                            </div>
                        </div>

                        
                        <div className="form-group">
                                <label>Description: </label>
                                <input type="text" name="description"
                                    className="form-control"
                                    value={this.state.post_event_description}
                                    onChange={this.onChangeEventDescription}
                                    />
                        </div>

                        <div className="form-group">
                                <label>Duration: </label>
                                <input type="text" name="duration"
                                    className="form-control"
                                    value={this.state.post_duration}
                                    onChange={this.onChangeDuration}
                                    />
                        </div>

                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type="radio"
                                    name="openOptions"
                                    id="openClosed"
                                    value="Closed"
                                    checked={this.state.post_open === 'Closed'}
                                    onChange={this.onChangeOpenStatus}
                                    />
                             <label className="form-check-label">Closed</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type="radio"
                                    name="openOptions"
                                    id="openOpen"
                                    value="Open"
                                    checked={this.state.post_open === 'Open'}
                                    onChange={this.onChangeOpenStatus}
                                    />
                                <label className="form-check-label">Open</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create Post" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}