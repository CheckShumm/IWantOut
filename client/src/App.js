import React, { Component } from "react";
import "./App.css";

import { Image, Container } from "semantic-ui-react";

// components

import Landing from "./components/landing/Landing";
import Footer from "./components/layout/Footer";
class App extends Component {
	render() {
		return (
			<div className="App">
				<Landing />
				<Container>
					<Image src="./img/city.jpg" fluid />
				</Container>
				<Footer />
			</div>
		);
	}
}

export default App;
