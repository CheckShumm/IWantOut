import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { setCity } from "../../actions/cityActions";

import TeleportAutoComplete from "../../utils/autocomplete";
import { Input, Button } from "semantic-ui-react";

class CitySearch extends Component {
  constructor() {
    super();
    this.state = {
      city: {},
      value: ""
    };
  }

  componentDidMount = () => {
    TeleportAutoComplete.init("#location-input").on("change", value => {
      this.setState({ city: value });
      this.props.setCity(this.state.city);
    });
  };

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  onClick = e => {
    // console.log(this.state.city);
    // const teleport =
    //   "https://api.teleport.org/api/urban_areas/slug:" +
    //   this.state.city.uaSlug +
    //   "/scores";
    // fetch(teleport)
    //   .then(resp => resp.json())
    //   .then(i => console.log(i));
    this.props.setCity(this.state.city);
  };
  render() {
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

CitySearch.propTypes = {
  setCity: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(
  mapStateToProps,
  { setCity }
)(CitySearch);
