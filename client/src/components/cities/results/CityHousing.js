import React, { Component } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import isEmpty from "../../../validation/is-empty";
import {
  setCityHousing,
  setCityCostOfLiving
} from "../../../actions/cityActions";

import { Menu, Grid } from "semantic-ui-react";

class CityHousing extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: "Small Appartment"
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount = () => {
    if (!isEmpty(this.props.city.city)) {
      if (!isEmpty(this.props.city.city.uaSlug)) {
        this.props.setCityHousing(this.props.city.city);
        this.props.setCityCostOfLiving(this.props.city.city);
      }
    }
  };

  getGraphData = resData => {
    const graphData = [];
    for (let i = 0; i < resData.length; i++) {
      graphData.push({
        name: resData[i].label,
        id: resData[i].id,
        value: resData[i].currency_dollar_value
      });
    }
    return graphData;
  };

  render() {
    // housing in bar chart, col in expandable table
    const housingData = this.getGraphData(this.props.city.housing);
    const colData = this.getGraphData(this.props.city.costOfLiving);
    console.log(housingData);
    const { activeItem } = this.state;
    return (
      <div>
        <Grid columns={3}>
          <Grid.Column>
            <Menu pointing secondary vertical>
              <Menu.Item
                name="Small Appartment"
                active={activeItem === "Small Appartment"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Medium Appartment"
                active={activeItem === "Medium Appartment"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Large Appartment"
                active={activeItem === "Large Appartment"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <BarChart
              width={500}
              height={300}
              data={housingData}
              margin={{ top: 5, right: 30, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </Grid.Column>
          <Grid.Column>
            <AreaChart
              width={400}
              height={300}
              data={colData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

CityHousing.propTypes = {
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(
  mapStateToProps,
  { setCityHousing, setCityCostOfLiving }
)(CityHousing);
