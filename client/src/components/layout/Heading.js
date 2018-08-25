import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Button, Icon } from "semantic-ui-react";

class Heading extends Component {
  render() {
    return (
      <div className="heading">
        <div className="dark-overlay text-light">
          <div className="heading-inner">
            <Container text textAlign="center">
              <Header
                as="h1"
                content="Find a City"
                inverted
                style={{
                  fontSize: "5em",
                  fontWeight: "normal"
                }}
              />
              <Header
                as="h2"
                content="Where you Belong."
                inverted
                style={{
                  fontSize: "2.5em",
                  fontWeight: "normal"
                }}
              />
              <Link to="/dashboard">
                <Button animated className="ui inverted teal button huge">
                  <Button.Content visible>Get Started</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Link>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Heading;
