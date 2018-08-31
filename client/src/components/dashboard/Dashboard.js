import React, { Component } from "react";
import {
	Grid,
	Segment,
	Button,
	Icon,
	Image,
	Transition
} from "semantic-ui-react";
import { Link } from "react-router-dom";

// importing images
import profileIcon from "../../img/dashboard/profile.png";
import cityIcon from "../../img/dashboard/city.png";
import careerIcon from "../../img/dashboard/career.png";
import rankingIcon from "../../img/dashboard/ranking.png";

class Dashboard extends Component {
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
			<div className="ui container center aligned">
				<div className="dashboard-container">
					<Grid centered columns={3}>
						<Grid.Column>
							<Transition visible={visible} animation="fade" duration={2000}>
								<Segment raised className="ui center aligned dashboard-segment">
									<Image
										src={profileIcon}
										centered
										className="dashboard-icon"
									/>
									<Link to="/profile">
										<Button animated className="ui orange button big">
											<Button.Content visible>Profile</Button.Content>
											<Button.Content hidden>
												<Icon name="arrow right" />
											</Button.Content>
										</Button>
									</Link>
								</Segment>
							</Transition>
						</Grid.Column>
						<Grid.Column>
							<Transition visible={visible} animation="fade" duration={3000}>
								<Segment raised className="ui center aligned dashboard-segment">
									<Image src={cityIcon} centered className="dashboard-icon" />
									<Link to="/cities">
										<Button animated className="ui teal button big">
											<Button.Content visible>Cities</Button.Content>
											<Button.Content hidden>
												<Icon name="arrow right" />
											</Button.Content>
										</Button>
									</Link>
								</Segment>
							</Transition>
						</Grid.Column>
						<Grid.Column>
							<Transition visible={visible} animation="fade" duration={4000}>
								<Segment raised className="ui center aligned dashboard-segment">
									<Image
										src={rankingIcon}
										centered
										className="dashboard-icon"
									/>

									<Button animated className="ui blue button big">
										<Button.Content visible>City Matches</Button.Content>
										<Button.Content hidden>
											<Icon name="arrow right" />
										</Button.Content>
									</Button>
								</Segment>
							</Transition>
						</Grid.Column>
						<Grid.Column>
							<Transition visible={visible} animation="fade" duration={5000}>
								<Segment raised className="ui center aligned dashboard-segment">
									<Image src={careerIcon} centered className="dashboard-icon" />

									<Button animated className="ui yellow button big">
										<Button.Content visible>Careers</Button.Content>
										<Button.Content hidden>
											<Icon name="arrow right" />
										</Button.Content>
									</Button>
								</Segment>
							</Transition>
						</Grid.Column>
					</Grid>
				</div>
			</div>
		);
	}
}

export default Dashboard;
