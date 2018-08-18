import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";

class CityHeading extends Component {
	render() {
		return (
			<Container text>
				<Header
					as="h1"
					content="Search for a City"
					inverted
					style={{
						fontSize: "5em",
						fontWeight: "normal"
					}}
				/>
			</Container>
		);
	}
}

export default CityHeading;
