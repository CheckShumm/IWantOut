import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

// components
import Navbar from "./components/layout/Navbar";
import Heading from "./components/layout/Heading";
import Footer from "./components/layout/Footer";
import Login from "./components/login/Login";
import Cities from "./components/cities/Cities";
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";
import Dashboard from "./components/dashboard/Dashboard";
import store from "./store";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Navbar />
						<div className="component_container">
							<Route exact path="/" component={Heading} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/register" component={Register} />
							<Route exact path="/cities" component={Cities} />
							<Route exact path="/dashboard" component={Dashboard} />
							<Route exact path="/profile" component={Profile} />
						</div>
						<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
