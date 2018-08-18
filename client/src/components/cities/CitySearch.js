import React, { Component } from "react";
import TeleportAutoComplete from "../../utils/autocomplete";
import { Input, Button } from "semantic-ui-react";
import isEmpty from "../../validation/is-empty";

class CitySearch extends Component {
	constructor() {
		super();
		this.state = {
			city: {},
			value: "",
			isLoading: false
		};
	}

	componentDidMount = () => {
		TeleportAutoComplete.init("#location-input").on("change", value => {
			this.setState({ city: value });
			console.log("key pressed");
		});
	};

	componentWillMount() {
		this.resetComponent();
	}

	resetComponent = () =>
		this.setState({ isLoading: false, results: [], value: "" });

	onClick = e => {
		console.log(this.state.city);
		const teleport =
			"https://api.teleport.org/api/urban_areas/slug:" +
			this.state.city.uaSlug +
			"/scores";
		fetch(teleport)
			.then(resp => resp.json())
			.then(i => console.log(i));
	};
	render() {
		const { isLoading, value } = this.state;
		return (
			<div>
				<Input
					action={
						<Button
							color="teal"
							icon="search"
							content="Search"
							onClick={this.onClick}
						/>
					}
					size="big"
					type="text"
					id="location-input"
					name="field"
					placeholder="Search..."
				/>
			</div>
		);
	}
}

export default CitySearch;
