import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav, Jumbotron } from "react-bootstrap";

import Home from "./Home";
import NotFound from "./NotFound";
import Stats from "./Stats";

import { StatsContext, defaultStats } from "./statsContext";

class Main extends Component {
    constructor(props) {
        super(props)

        this.updateStats = async () => {
            console.log("fetching")
            let res = await fetch("https://membercount.glitch.me/api/basic");
            let json = await res.json();
            this.setState(state => ({
                stats: json
            }))
            localStorage.stats = JSON.stringify({
                guilds: json.guilds,
                clusters: [],
                totalRam: json.totalRam,
                users: json.users
            })
        }

        if (localStorage.stats) {
            console.log(localStorage.stats)
            console.log(JSON.parse(localStorage.stats))
            this.state = {
                stats: JSON.parse(localStorage.stats),
                updateStats: this.updateStats
            }
        } else {
            this.state = {
                stats: defaultStats,
                updateStats: this.updateStats
            }
        }

        this.state.updateStats();
    }

render() {
return (
<>

<Navbar bg="dark" variant="dark" expand="md">
    <Link to="/" className="navbar-brand">
        <img src="/img/logo256.png" width="40" height="40" alt="Member Count logo"/>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Nav.Link href="https://docs.membercount.net">Documentation</Nav.Link>
            <Link to="/stats" className="nav-link">Statistics</Link>
            <Nav.Link href="https://patreon.com/member_count">Donate</Nav.Link>
            <Nav.Link href="/invite?from=sitenav">Invite</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>

<StatsContext.Provider value={this.state}>
<div className="content">
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/stats" component={Stats}/>
        <Route path='/invite' component={() => {
            window.location.replace('https://discordapp.com/api/oauth2/authorize?client_id=432533456807919639&permissions=8&scope=bot'); 
            return null;
        }}/>
        <Route component={NotFound}/>
    </Switch>
</div>
</StatsContext.Provider>

<Jumbotron fluid id="footer">
    <p>© 2018-{new Date().getFullYear()} <span id="hug">(っ⌒‿⌒)っ</span> lieuwe_berg & CHamburr</p>
</Jumbotron>

</>
)
}
}

export default Main;
