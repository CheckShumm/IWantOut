import React, { Component } from "react";
import CitySearch from "./CitySearch";
import CityResults from "./results/CityResults";
import CityHeading from "./layout/CityHeading";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import backgroundImage from "../../img/city-banner.jpg";
import isEmpty from "../../validation/is-empty";

class Cities extends Component {
  render() {
    const backgroundURL = isEmpty(this.props.city.city)
      ? backgroundImage
      : this.props.city.image;
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${backgroundURL})`,
            position: "relative",
            height: "50vh",
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
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
Cities.propTypes = {
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(mapStateToProps)(Cities);
