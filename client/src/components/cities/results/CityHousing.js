import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import isEmpty from "../../../validation/is-empty";
import { setCityHousing } from "../../../actions/cityActions";

class CityHousing extends Component {
	componentDidMount = () => {
		if (!isEmpty(this.props.city.city)) {
			if (!isEmpty(this.props.city.city.uaSlug)) {
				this.props.setCityHousing(this.props.city.city);
			}
		}
	};

	render() {
		console.log(this.props.city.housing);
		return <div>City Housing</div>;
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
	{ setCityHousing }
)(CityHousing);
