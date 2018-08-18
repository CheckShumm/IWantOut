import React from "react";
import { Label, Menu, Tab } from "semantic-ui-react";

const panes = [
	{
		menuItem: {
			key: "quality",
			icon: "star",
			content: "Quality"
		},
		render: () => <Tab.Pane> Quality of Life </Tab.Pane>
	},
	{
		menuItem: {
			key: "housing",
			icon: "home",
			content: "Housing"
		},
		render: () => <Tab.Pane> Housing </Tab.Pane>
	},
	{
		menuItem: {
			key: "careers",
			icon: "briefcase",
			content: "Careers"
		},
		render: () => <Tab.Pane> Careers </Tab.Pane>
	},
	{
		menuItem: {
			key: "education",
			icon: "university",
			content: "Education"
		},
		render: () => <Tab.Pane> Education </Tab.Pane>
	},
	{
		menuItem: {
			key: "weather",
			icon: "cloud",
			content: "Weather"
		},
		render: () => <Tab.Pane> Education </Tab.Pane>
	}
];

const CityTabs = () => (
	<div className="city-results">
		<Tab
			menu={{
				color: "blue",
				attatched: "false",
				tabular: "false",
				compact: "true"
			}}
			panes={panes}
		/>
	</div>
);

export default CityTabs;
