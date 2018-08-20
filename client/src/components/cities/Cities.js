import React, { Component } from "react";
import CitySearch from "./CitySearch";
import CityResults from "./results/CityResults";
import CityHeading from "./layout/CityHeading";

class Cities extends Component {
  render() {
    return (
      <div>
        <div className="city-heading">
          <div className=" banner-dark-overlay  text-light">
            <div className="heading-inner">
              <div className="ui one column stackable center aligned page grid">
                <div className="column twelve wide">
                  <CityHeading />
                </div>
                <CitySearch />
              </div>
            </div>
          </div>
        </div>

        <CityResults />
      </div>
    );
  }
}

export default Cities;
