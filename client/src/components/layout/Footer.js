import React, { Component } from "react";
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";

class Footer extends Component {
	render() {
		return (
			<Segment inverted vertical style={{ padding: "5em 0em" }}>
				<Container>
					<Grid divided inverted stackable>
						<Grid.Row>
							<Grid.Column width={3}>
								<Header inverted as="h4" content="iWantOut" />
								<List link inverted>
									<List.Item as="a">About</List.Item>
									<List.Item as="a">Contact</List.Item>
									<List.Item as="a">Read Me</List.Item>
									<List.Item as="a">Github Source</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={3}>
								<Header inverted as="h4" content="Libraries Used" />
								<List link inverted>
									<List.Item as="a">Teleport Api</List.Item>
									<List.Item as="a">react-semantic-ui</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={7}>
								<Header as="h4" inverted>
									Social Media plugs + copyright
								</Header>
								<p>
									Extra space for a call to action inside the footer that could
									help re-engage users.
								</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Segment>
		);
	}
}

export default Footer;
