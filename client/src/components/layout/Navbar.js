import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// semantic-ui
import { Segment, Button, Container, Menu } from "semantic-ui-react";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      active: "Home"
    };
  }

  handleClick = (pageTitle, e) => {
    switch (pageTitle) {
      case "Home":
        this.setState({ active: "Home" });
        this.props.history.push("/");
        break;
      case "Cities":
        this.setState({ active: "Cities" });
        this.props.history.push("/Cities");
        break;
      case "Careers":
        this.setState({ active: "Careers" });
        break;
      case "About":
        this.setState({ active: "About" });
        break;
      default:
        break;
    }
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <div>
        <Link to="/profile">My Profile</Link>
        <Button
          inverted
          primary
          onClick={this.onLogoutClick}
          style={{ marginLeft: "0.8em" }}
        >
          Log Out
        </Button>
      </div>
    );
    const guestLinks = (
      <div>
        <Link to="/login">
          <Button inverted primary>
            Log In
          </Button>
        </Link>
        <Link to="/register">
          <Button inverted color="purple" style={{ marginLeft: "0.5em" }}>
            Sign Up
          </Button>
        </Link>
      </div>
    );
    return (
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 75, padding: "1em 0em" }}
        vertical
      >
        <Menu inverted pointing secondary size="large">
          <Container>
            <Menu.Item
              active={this.state.active === "Home"}
              onClick={() => this.handleClick("Home")}
            >
              Home
            </Menu.Item>
            <Menu.Item
              active={this.state.active === "Cities"}
              onClick={() => this.handleClick("Cities")}
            >
              Cities
            </Menu.Item>
            <Menu.Item
              active={this.state.active === "Careers"}
              onClick={() => this.handleClick("Careers")}
            >
              Careers
            </Menu.Item>
            <Menu.Item
              active={this.state.active === "About"}
              onClick={() => this.handleClick("About")}
            >
              About
            </Menu.Item>
            <Menu.Item position="right">
              {isAuthenticated ? authLinks : guestLinks}
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Navbar));
