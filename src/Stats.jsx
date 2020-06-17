import React, { Component } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

import styles from "./css/Stats.module.css";
import { StatsContext } from './statsContext';

class Stats extends Component {
render() { 
let shards = 0;

function addShards(n) {
    shards += n;
}

return (
<>

<Container className={styles.titleandglance}>
    <h2>STATISTICS</h2>
    <Row>
        <HighlightedStats name="Guilds" stat="guilds"/>
        <HighlightedStats name="Users" stat="users"/>
        <HighlightedStats name="Memory Usage" stat="totalRam"/>
    </Row>
</Container>

<Container>
    <Row className={styles.cards}>
        <StatsContext.Consumer>
            {({stats, updateStats}) => (
                <>{stats.clusters ? stats.clusters.map((c, i) => (
                    <Col xs="6" md="4" lg="3" key={i}>
                        <Card bg="dark" text="white">
                            <Card.Body>
                                <Card.Title>Cluster {c.cluster}</Card.Title>
                                <b>Shard</b> {shards}-{shards+c.shards} <br/>
                                <b>Guilds</b> {c.guilds} <br/>
                                <b>Uptime</b> {durationFormat(c.uptime)} <br/>
                                <b>Memory</b> {parseInt(c.ram)}MB
                            </Card.Body>
                        </Card>

                        {/* Dodgy af but it works */}
                        {addShards(c.shards)}
                    </Col>
                )) : ""}</>
            )}
        </StatsContext.Consumer>
    </Row>
    
</Container>

</>
)
}
}

class HighlightedStats extends Component {
render() {
return(

<Col md="4">
    <h5>{this.props.name}</h5>
    <br/>
    <StatsContext.Consumer>
        {({stats, updateStats}) => (
            <p>{this.props.stat === "totalRam"
                    ? isNaN(stats[this.props.stat]) ? "0" : (stats[this.props.stat] * 1000000 / 1048576 / 1024).toFixed(2) + "GB"
                    : isNaN(stats[this.props.stat]) ? "0" : numberFormat(stats[this.props.stat])
            }</p>
        )}
    </StatsContext.Consumer>
</Col>

)
}
}

function numberFormat(number) {
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function durationFormat(duration) {
    duration /= 1000;
    let days = Math.floor(duration / 86400);
    let hours = Math.floor((duration % 86400) / 3600);
    let minutes = Math.floor((duration % 3600) / 60);
    if (days) return `${days}d ${hours}h ${minutes}m`;
    else if (hours) return `${hours}h ${minutes}m`;
    else return `${minutes}m`;
}

export default Stats;