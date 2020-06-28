import React, { Component } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

import styles from "./css/Home.module.css";
import { StatsContext } from "./statsContext";

class Home extends Component {
render() {
return (
<>

<div className={styles.splash}>
    <div className={styles.bg}></div>
    <div className={`${styles.bg} ${styles.bg2}`}></div>
    <div className={`${styles.bg} ${styles.bg3}`}></div>

    <div className={styles.splashitems}>
        <div className={styles.splashtext}>
            <img src="/img/logo256.png" width="200px" alt="Member Count"/>
            <h1>Member Count</h1>
            <h3>managing server stats<br/>with channel names<br/>in <span id="servercount" style={{fontWeight: "bold"}}>
                    <StatsContext.Consumer>
                        {({stats, updateStats}) => (
                            stats.guilds
                        )}
                    </StatsContext.Consumer>
                </span> servers
            </h3>
        </div>

        <div className={styles.buttons}>
            <Button variant="primary" size="lg" href="/invite?from=splash" className={styles.raised}><i className="fas fa-plus"></i> Invite Bot</Button>
            <Button variant="success" size="lg" href="https://discord.gg/dWMgWWw" className={styles.raised}><i className="fas fa-question"></i> Join Server</Button>
        </div>
    </div>
</div>

<Container className={styles.features}>
    <h2>FEATURES</h2>

    <Row>
        <Col md="7">
            <Card bg="dark" text="white">
                <Card.Body>
                    <Card.Title as="h3">Fancy Statistics</Card.Title>
                    <Card.Text>Cosmetic, aesthetically pleasing counters (statistics) for you and your server members. They automatically update, giving you a real one-time configuration process that you shouldn't have to use ever again.</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md="5">
            {/* <p>yay</p> */}
        </Col>
    </Row>

    <Row>
        <Col md="5">
            {/* <p>yay</p> */}
        </Col>
        <Col md="7">
            <Card bg="dark" text="white">
                <Card.Body>
                    <Card.Title as="h3">Easy Setup</Card.Title>
                    <Card.Text>Only one command is needed for the setup of this bot, <code>m!setup</code>. This command also reverts all the settings to the default values when you want to quickly reset them.</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>

    <Row>
        <Col md="7">
            <Card bg="dark" text="white">
                <Card.Body>
                    <Card.Title as="h3">Configurable</Card.Title>
                    <Card.Text>Want to turn a counter off? Want to change the name of a counter? Feel free to do so! All of the commands can be viewed from the help menu, with the command <code>m!help</code>, or on the <a href="https://docs.membercount.net">docs</a>.</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md="5">
            {/* <p>yay</p> */}
        </Col>
    </Row>
</Container>

<Container fluid className={styles.gettingstarted}>
    <h2>GETTING STARTED</h2>
    <p>The best way to get help with the using the bot is to go to the documentation.
        <br/>See the Intro section on the docs for help setting up the bot.
        <br/>You can also view the FAQ if you have any more questions.
        <br/>If you need further help, you can join the <a href="https://discord.gg/dWMgWWw">support server</a> (#support).
    </p>
    <div className={styles.buttons}>
        <Button variant="info" size="lg" href="https://docs.membercount.net/guide"><i className="fas fa-book"></i> Guide</Button>
        <Button variant="info" size="lg" href="https://docs.membercount.net/faq"><i className="fas fa-info-circle"></i> FAQ</Button>
    </div>
</Container>

</>    
)
}
}

export default Home;