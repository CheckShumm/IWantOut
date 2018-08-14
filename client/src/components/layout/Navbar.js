import React, { Component } from "react";
import { Link } from "react-router-dom";

// semantic-ui
import { Segment, Button, Container, Menu } from "semantic-ui-react";

class Navbar extends Component {
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
            <Menu.Item active>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>Cities</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">About</Menu.Item>
            <Menu.Item position="right">
              <Link to="/login">
                <Button inverted>Log In</Button>
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
