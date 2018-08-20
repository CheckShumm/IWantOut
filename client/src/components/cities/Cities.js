import React, { Component } from "react";
import CitySearch from "./CitySearch";
import CityResults from "./results/CityResults";
import CityHeading from "./layout/CityHeading";
import { Grid, Header } from "semantic-ui-react";
class Cities extends Component {
  render() {
    return (
      <div>
        <div className="city-heading">
          <div className=" banner-dark-overlay  text-light">
            <div className="heading-inner">
              <div class="ui one column stackable center aligned page grid">
                <div class="column twelve wide">
                  <CityHeading />
                </div>
                <CitySearch />
              </div>
            </div>
          </div>
        </div>
        <div className="ui cenetered grid">
          <div className="center aligned column">
            <div className="ui compact menu">
              <CityResults />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cities;
