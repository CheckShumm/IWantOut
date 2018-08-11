import React, { Component } from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";

class Heading extends Component {
	render() {
		return (
			<div className="heading">
				<div className="dark-overlay landing-inner text-light">
					<div className="heading-inner">
						<Container text textAlign="center">
							<Header
								as="h1"
								content="Find the City"
								inverted
								style={{
									fontSize: "5em",
									fontWeight: "normal"
								}}
							/>
							<Header
								as="h2"
								content="Where you Belong."
								inverted
								style={{
									fontSize: "2.5em",
									fontWeight: "normal"
								}}
							/>
							<button class="ui inverted teal button huge">
								Get Started
								<Icon name="right arrow" />
							</button>
						</Container>
					</div>
				</div>
			</div>
		);
	}
}

export default Heading;
