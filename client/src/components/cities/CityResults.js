import React, { Component } from "react";
import CityTabs from "./layout/CityTabs";
import { Segment, Container } from "semantic-ui-react";
class CityResults extends Component {
	render() {
		return (
			<div>
				<CityTabs />
			</div>
		);
	}
}

export default CityResults;
