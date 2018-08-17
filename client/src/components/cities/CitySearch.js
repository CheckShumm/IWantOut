import React, { Component } from "react";
import TeleportAutoComplete from "../../utils/autocomplete";
import { Input } from "semantic-ui-react";
import isEmpty from "../../validation/is-empty";
import _ from "lodash";

class CitySearch extends Component {
	constructor() {
		super();
		this.state = {
			teleport: {},
			results: [],
			value: "",
			isLoading: false
		};
	}

	componentDidMount = () => {
		const autoComplete = new TeleportAutoComplete({
			el: "#location-input",
			maxItems: 5,
			embed: "",
			geoLocate: false,
			nopick: true
		});
		this.setState({ teleport: autoComplete });
	};

	componentWillMount() {
		this.resetComponent();
	}

	resetComponent = () =>
		this.setState({ isLoading: false, results: [], value: "" });

	handleResultSelect = (e, { result }) => {
		this.setState({ value: result.title });
	};

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value });
		let cityArray = [];
		let teleport = this.state.teleport.results;

		for (let i = 0; i < teleport.length; i++) {
			const city = {
				title: teleport[i].title,
				name: teleport[i].name,
				id: teleport[i].geonameId
			};
			cityArray.push(city);
		}

		setTimeout(() => {
			if (this.state.value.length < 1) return this.resetComponent();

			this.setState({
				isLoading: false,
				results: cityArray
			});
		}, 300);
	};

	render() {
		const { isLoading, value, results } = this.state;
		return (
			<Input
				size="big"
				type="text"
				icon={!isLoading && isEmpty(value) ? "search" : ""}
				onChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
				id="location-input"
				name="field"
				placeholder="Search..."
			/>
		);
	}
}

export default CitySearch;
