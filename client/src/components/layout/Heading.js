import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Button, Icon, Transition } from "semantic-ui-react";

class Heading extends Component {
	constructor() {
		super();
		this.state = {
			visible: false
		};
	}

	componentDidMount = () => {
		this.setState({ visible: true });
	};

	render() {
		const { visible } = this.state;
		return (
			<div className="heading">
				<div className="dark-overlay text-light">
					<div className="heading-inner">
						<Container text textAlign="center">
							<Transition visible={visible} animation="fade" duration={2000}>
								<Header
									as="h1"
									content="Find a City"
									inverted
									style={{
										fontSize: "5em",
										fontWeight: "normal"
									}}
								/>
							</Transition>
							<Transition visible={visible} animation="fade" duration={6000}>
								<Header
									as="h2"
									content="Where you Belong."
									inverted
									style={{
										fontSize: "2.5em",
										fontWeight: "normal",
										marginBottom: "50px"
									}}
								/>
							</Transition>
							<Transition visible={visible} animation="fade" duration={8000}>
								<Link to="/dashboard">
									<Button animated className="ui inverted teal button huge">
										<Button.Content visible>Get Started</Button.Content>
										<Button.Content hidden>
											<Icon name="arrow right" />
										</Button.Content>
									</Button>
								</Link>
							</Transition>
						</Container>
					</div>
				</div>
			</div>
		);
	}
}

export default Heading;
