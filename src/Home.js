import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    handleChange = (e) => this.setState({ url: e.target.value })

    startMeeting = () => {
        // Generate a random URL and redirect to it
        var url = Math.random().toString(36).substring(2, 7)
        window.location.href = `/${url}`
    }

    joinMeeting = () => {
        if (this.state.url !== "") {
            var url = this.state.url.split("/")
            window.location.href = `/${url[url.length-1]}`
        } else {
            alert("Please enter a URL to join a meeting");
        }
    }

   render() {
    return (
        <div className="container2">
            
            <div>
                <h1 style={{ fontSize: "45px" }}>Video Meeting</h1>
                <p style={{ fontWeight: "500" }}>Video conference website that lets you stay in touch with all your friends.</p>
            </div>
            <div className="parent-of-container3">
            <div className="container3">
                <p style={{ margin: "0 0 0 40px", fontWeight: "bold", paddingRight: "50px" }}>Create a meeting</p>
                <Button variant="contained" color="primary" onClick={this.startMeeting} style={{ margin: "20px" }}>Start</Button>
                <hr style={{ height: "2px", backgroundColor: "black" }} />
                <p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Join a meeting</p>
                <Input placeholder="URL" onChange={e => this.handleChange(e)} />
                <Button variant="contained" color="primary" onClick={this.joinMeeting} style={{ margin: "20px" }}>Join</Button>
            </div>
            </div>
            <div className="github-icon-container">
                Source code: 
                <IconButton style={{color: "black"}} onClick={() => window.location.href="https://github.com/anurag1942003/Video-Meet"}>
                    <GitHubIcon />
                </IconButton>
            </div>
        </div>
    )
}
}

export default Home;
