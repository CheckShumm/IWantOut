import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Responsive, Container } from "semantic-ui-react";

import "./App.css";

// components
import Navbar from "./components/layout/Navbar";
import Heading from "./components/layout/Heading";
import Footer from "./components/layout/Footer";
import Login from "./components/login/Login";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<div className="component_container">
						<Route exact path="/" component={Heading} />
						<Route exact path="/login" component={Login} />
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
