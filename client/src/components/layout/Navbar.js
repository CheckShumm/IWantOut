import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        break;
      case "Cities":
        this.setState({ active: "Cities" });
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

  render() {
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
              <Link to="/">Home</Link>
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
              <Link to="/login">
                <Button inverted primary>
                  Log In
                </Button>
              </Link>
              <Link to="/register">
                <Button inverted primary style={{ marginLeft: "0.5em" }}>
                  Sign Up
                </Button>
              </Link>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    );
  }
}

export default Navbar;
