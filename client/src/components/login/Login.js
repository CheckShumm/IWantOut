import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

import isEmpty from "../../validation/is-empty";

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Transition,
  Message,
  Segment
} from "semantic-ui-react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      visible: false,
      errors: {}
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  };

  componentDidMount() {
    console.log(this.props.auth.isAuthenticated);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    } else {
      this.setState({ visible: true });
    }
  }

  onChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };

  render() {
    const { email, password, visible, errors } = this.state;
    return (
      <div className="heading">
        <div className="dark-overlay landing-inner text-light">
          <div className="auth-form">
            <style>{`
      body > div,
      body > div > div,
      body > div > div > div.register-form {
        height: 100%;
      }
    `}</style>
            <Grid
              textAlign="center"
              style={{ height: "100%" }}
              verticalAlign="middle"
            >
              <Transition visible={visible} animation="fade up" duration={500}>
                <Grid.Column style={{ maxWidth: 450 }}>
                  <Header as="h1" color="teal" textAlign="center">
                    <Image src="" /> Log in to your account
                  </Header>
                  <Form size="large" error={!isEmpty(errors)}>
                    <Segment stacked>
                      <Form.Input
                        fluid
                        name="email"
                        error={!isEmpty(errors.email)}
                        onChange={this.onChange}
                        icon="user"
                        value={email}
                        iconPosition="left"
                        placeholder="E-mail address"
                      />
                      {errors.email && <Message error content={errors.email} />}
                      <Form.Input
                        fluid
                        name="password"
                        error={!isEmpty(errors.password)}
                        onChange={this.onChange}
                        value={password}
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                      />
                      {errors.password && (
                        <Message error content={errors.password} />
                      )}
                      <Button
                        onClick={this.onSubmit}
                        color="teal"
                        fluid
                        size="large"
                      >
                        Log In
                      </Button>
                    </Segment>
                  </Form>
                  <Message>New to us? Sign Up</Message>
                </Grid.Column>
              </Transition>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
