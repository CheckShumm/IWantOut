import React, { Component } from "react";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setProfile } from "../../actions/profileActions";

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
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      location: "",
      profession: "",
      housing: "",
      costOfLiving: "",
      education: "",
      economy: "",
      culture: "",
      career: "",
      climate: ""
    };
  }

  createProfile = () => {
    const newProfile = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      location: this.state.location,
      profession: this.state.profession,
      housing: this.state.housing,
      costOfLiving: this.state.costOfLiving,
      education: this.state.education,
      economy: this.state.economy,
      culture: this.state.culture,
      climate: this.state.climate,
      career: this.state.career
    };
    this.props.setProfile(newProfile);
    this.props.history.push("/dashboard");
  };

  render() {
    const settings = {
      start: 2,
      min: 0,
      max: 10,
      step: 1
    };
    const professions = [{ key: "test", text: "test", value: "test" }];
    const {
      firstName,
      lastName,
      location,
      profession,
      housing,
      costOfLiving,
      education,
      economy,
      culture,
      climate,
      career
    } = this.state;
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
                  value={firstName}
                  label="First name"
                  placeholder="First name"
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  value={lastName}
                  label="Last name"
                  placeholder="Last name"
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-location"
                  control={Input}
                  value={location}
                  label="Location"
                  placeholder="Location"
                />
                <Form.Field
                  id="form-input-control-profession"
                  control={Dropdown}
                  value={profession}
                  label="Profession"
                  selection
                  options={professions}
                  placeholder="Profession"
                />
              </Form.Group>
              <Form.Field
                id="form-input-control-first-name"
                label="Rate the following based on their importance?"
                discrete
                color="blue"
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Slider}
                value={climate}
                label="How important is good climate?"
                discrete
                color="teal"
                inverted={false}
                settings={settings}
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Slider}
                value={housing}
                label="How cost efficient should housing be?"
                discrete
                color="teal"
                inverted={false}
                settings={settings}
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Slider}
                value={costOfLiving}
                label="How much does the general cost of living affect you?"
                discrete
                color="teal"
                inverted={false}
                settings={settings}
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Slider}
                value={education}
                label="The strength of the city's education facilities"
                discrete
                color="teal"
                inverted={false}
                settings={settings}
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Slider}
                value={economy}
                label="The strength of the city's economy"
                discrete
                color="teal"
                inverted={false}
                settings={settings}
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Slider}
                value={career}
                label="The career potential in the city"
                discrete
                color="teal"
                inverted={false}
                settings={settings}
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Slider}
                value={culture}
                label="The city should have rich culture"
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

Profile.propTypes = {
  setProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { setProfile }
)(withRouter(Profile));
