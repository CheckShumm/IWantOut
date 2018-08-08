import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// components
import HomepageLayout from "./components/layout/Navbar";

class App extends Component {
	render() {
		return (
			<div className="App">
				<HomepageLayout />
			</div>
		);
	}
}

export default App;
