import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import isEmpty from "../../../validation/is-empty";

class CityHeading extends Component {
  render() {
    const title = isEmpty(this.props.city.city)
      ? "Search for a City"
      : this.props.city.city.name;
    return (
      <Container text>
        <Header
          as="h1"
          content={title}
          inverted
          style={{
            fontSize: "5em",
            fontWeight: "normal"
          }}
        />
      </Container>
    );
  }
}

CityHeading.propTypes = {
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(mapStateToProps)(CityHeading);
