import React, { Component } from 'react';

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post_event_description: '',
            post_event_date: '',
            post_team_members: [],
            post_max_members: '',
            post_owner: '',
            post_date: '',
            post_open: ''
        }
        this.onChangeEventDescription = this.onChangeEventDescription.bind(this);
        this.onChangeEventDate = this.onChangeEventDate.bind(this);
        this.onAddMember = this.onAddMember.bind(this);
        this.onChangeOpenStatus = this.onChangeOpenStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
    }

    onChangeEventDescription(new_description) { // these are events, titled with 'onEvent' as in, they occur when the event occurs
        this.setState({
            post_event_description: new_description.target.value
        });
    }

    onChangeEventDate(new_date) { // these are basically setters
        this.setState({
            post_event_date: new_date.target.value
        });
    }

    onChangePoster(e) { // these are basically setters
        this.setState({
            post_owner: e.target.value
        });
    }

    onAddMember(new_member, status) {
        this.setState({
            post_team_members: new_member.target.value
        });
    }
    
    onChangeOpenStatus(open_status) {
        this.setState({
            post_open: open_status.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault(); // prevent default HTML code

        console.log(`Post submitted:`);
        console.log(`Post Description: ${this.state.post_event_description}`);
        console.log(`Event Date: ${this.state.post_event_date}`);
        console.log(`Group Members: ${this.state.post_team_members}`);
        console.log(`Posted: ${this.state.post_date}`);
        console.log(`Availability: ${this.state.post_open}`);

        this.setState({
            post_event_description: '',
            post_event_date: '',
            post_team_members: [],
            post_max_members: '',
            post_owner: '',
            post_date: '',
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
                            <label>Poster: </label>
                            <input type="text"
                                classname="form-control"
                                value={this.state.post_owner}
                                onChange={this.onChangePoster}
                                />
                        </div>
                        
                        <div className="form-group">
                            <label>Event Date: </label>
                            <input type="text"
                                classname="form-control"
                                value={this.state.post_event_description}
                                onChange={this.onChangeEventDescription}
                                />
                        </div>

                        <div className="form-group">
                            <label>Team Members:</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.post_team_members}
                                onChange={this.onAddMember}
                                />
                        </div>

                        <div className="form-group">
                                <label>Description: </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.post_event_date}
                                    onChange={this.onChangeEventDate}
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