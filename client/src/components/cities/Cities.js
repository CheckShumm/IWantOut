import React, { Component } from "react";
import CitySearch from "./CitySearch";
import CityResults from "./CityResults";
import { Grid, Header } from "semantic-ui-react";
class Cities extends Component {
	render() {
		return (
			<div className="heading-inner">
				<Grid centered columns={2}>
					<Grid.Column>
						<Header
							as="h3"
							content="Find a City"
							style={{
								fontSize: "5em",
								fontWeight: "normal"
							}}
						/>
					</Grid.Column>
					<Grid.Row centered columns={2}>
						<Grid.Column>
							<CitySearch />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered columns={2}>
						<Grid.Column>
							<CityResults />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default Cities;
