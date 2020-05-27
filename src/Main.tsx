import React, { Component } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";

import Home from "./Home";

class Main extends Component {
render() {
return (

<BrowserRouter>
<nav className="">

</nav>

<div className="content">
    <Route exact path="/" component={Home}/>
</div>

</BrowserRouter>

)
}
}

export default Main;