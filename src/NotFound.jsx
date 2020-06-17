import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from "./css/NotFound.module.css"

class NotFound extends Component {
render() {
return (
<>

<div className={styles.error}>
    <h1>Uh oh, that page could not be found.</h1>
    <h4>
        <Link to="/">Head back home</Link>
    </h4>
</div>

</>
)
}
}

export default NotFound;