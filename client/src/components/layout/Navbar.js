import React, { Component } from "react";
// semantic-ui
import { Button, Container, Menu } from "semantic-ui-react";

class Navbar extends Component {
	render() {
		return (
			<Container>
				<Menu.Item as="a" active>
					Home
				</Menu.Item>
				<Menu.Item as="a">Work</Menu.Item>
				<Menu.Item as="a">Company</Menu.Item>
				<Menu.Item as="a">Careers</Menu.Item>
				<Menu.Item position="right">
					<Button as="a" inverted={!this.props.fixed}>
						Log in
					</Button>
					<Button
						as="a"
						inverted={!this.props.fixed}
						primary={this.props.fixed}
						style={{ marginLeft: "0.5em" }}>
						Sign Up
					</Button>
				</Menu.Item>
			</Container>
		);
	}
}

export default Navbar;
