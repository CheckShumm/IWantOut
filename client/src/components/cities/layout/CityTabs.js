import React, { Component } from "react";

import { Menu, Icon, Segment } from "semantic-ui-react";

import CityQuality from "../results/CityQuality";
import CityHousing from "../results/CityHousing";

class CityTabs extends Component {
  constructor() {
    super();
    this.state = { activeItem: "quality" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <div className="ui one column stackable center aligned page grid">
          <div className="column twelve wide">
            <div className="ui five item menu">
              <Menu borderless color="blue" size="mini" compact icon="labeled">
                <Menu.Item
                  name="quality"
                  active={activeItem === "quality"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="star" />
                  Quality
                </Menu.Item>
                <Menu.Item
                  name="housing"
                  active={activeItem === "housing"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="home" />
                  Housing
                </Menu.Item>
                <Menu.Item
                  name="careers"
                  active={activeItem === "careers"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="briefcase" />
                  Careers
                </Menu.Item>
                <Menu.Item
                  name="education"
                  active={activeItem === "education"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="university" />
                  Education
                </Menu.Item>
                <Menu.Item
                  name="weather"
                  active={activeItem === "weather"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="cloud" />
                  Weather
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </div>
        <Segment>
          {activeItem === "quality" ? <CityQuality /> : null}
          {activeItem === "housing" ? <CityHousing /> : null}
        </Segment>
      </div>
    );
  }
}

export default CityTabs;
