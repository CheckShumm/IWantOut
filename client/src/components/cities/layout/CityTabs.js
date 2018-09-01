import React from "react";
import { Tab } from "semantic-ui-react";
import CityQuality from "../results/CityQuality";
import CityHousing from "../results/CityHousing";
const panes = [
	{
		menuItem: {
			key: "quality",
			icon: "star",
			content: "Quality"
		},
		render: () => (
			<Tab.Pane>
				{" "}
				<CityQuality />{" "}
			</Tab.Pane>
		)
	},
	{
		menuItem: {
			key: "housing",
			icon: "home",
			content: "Housing"
		},
		render: () => (
			<Tab.Pane>
				{" "}
				<CityHousing />{" "}
			</Tab.Pane>
		)
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
	<div>
		<Tab
			menu={{
				color: "blue",
				attatched: "false",
				fluid: true
			}}
			panes={panes}
		/>
	</div>
);

export default CityTabs;
