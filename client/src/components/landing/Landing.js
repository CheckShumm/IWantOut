import React, { Component } from "react";

import {
	Menu,
	Responsive,
	Segment,
	Visibility,
	Image
} from "semantic-ui-react";

// components
import Navbar from "../layout/Navbar";
import Heading from "../layout/Heading";

class Landing extends Component {
	state = {};

	hideFixedMenu = () => this.setState({ fixed: false });
	showFixedMenu = () => this.setState({ fixed: true });

	render() {
		const { children } = this.props;
		const { fixed } = this.state;

		return (
			<div className="App">
				<Responsive minWidth={Responsive.onlyTablet.minWidth}>
					<Visibility
						once={false}
						onBottomPassed={this.showFixedMenu}
						onBottomPassedReverse={this.hideFixedMenu}>
						<Segment
							inverted
							textAlign="center"
							style={{ minHeight: 1000, padding: "1em 0em" }}
							vertical>
							<Menu
								fixed={fixed ? "top" : null}
								inverted={!fixed}
								pointing={!fixed}
								secondary={!fixed}
								size="large">
								<Navbar />
							</Menu>
							<Heading />
						</Segment>
					</Visibility>
					{children}
				</Responsive>
			</div>
		);
	}
}

export default Landing;
