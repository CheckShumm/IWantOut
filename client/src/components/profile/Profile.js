import React, { Component } from "react";
import {
  Form,
  Input,
  Grid,
  TextArea,
  Button,
  Segment,
  Header,
  Icon,
  Label,
  Dropdown
} from "semantic-ui-react";
import { Slider } from "react-semantic-ui-range";

class Profile extends Component {
  render() {
    const settings = {
      start: 2,
      min: 0,
      max: 10,
      step: 1
    };
    const professions = [{ key: "test", text: "test", value: "test" }];
    return (
      <div className="ui one column stackable center aligned page grid">
        <div className="profile-container">
          <Header as="h1" icon textAlign="center" color="blue">
            <Icon name="user" circular />
            <Header.Content>Create Your Profile</Header.Content>
          </Header>
          <Header as="h3" textAlign="center">
            Create an account or login to save your profile
          </Header>
          <Grid columns={3} className="ui center aligned">
            <Grid.Column>
              <Button size="tiny" inverted primary>
                Log In
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button size="tiny" inverted color="purple">
                Sign Up
              </Button>
            </Grid.Column>
          </Grid>

          <Segment raised className="ui center aligned">
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="First name"
                  placeholder="First name"
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Last name"
                  placeholder="Last name"
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="Location"
                  placeholder="Location"
                />
                <Form.Field
                  id="form-input-control-first-name"
                  control={Dropdown}
                  label="Profession"
                  selection
                  options={professions}
                  placeholder="Profession"
                />
              </Form.Group>

              <Form.Field
                id="form-input-control-first-name"
                control={Slider}
                label="How important is good climate in making your decision?"
                discrete
                color="teal"
                inverted={false}
                settings={settings}
              />
            </Form>
            <Button style={{ marginTop: "32px" }} centered color="blue">
              Create Profile
            </Button>
          </Segment>
        </div>
      </div>
    );
  }
}

export default Profile;
