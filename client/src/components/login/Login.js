import React, { Component } from "react";
import axios from "axios";
import isEmpty from "../../validation/is-empty";
import { Link } from "react-router-dom";
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

  componentDidMount = () => {
    this.setState({ visible: true });
  };
  onChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/api/users/login", userData)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  };

  render() {
    const { email, password, visible, errors } = this.state;
    return (
      <div className="heading">
        <div className="dark-overlay landing-inner text-light">
          <div className="auth-form">
            <Grid textAlign="center" style={{ height: "100%" }}>
              <Transition visible={visible} animation="fade up" duration={500}>
                <Grid.Column style={{ maxWidth: 450 }}>
                  <Header as="h1" color="teal" textAlign="center">
                    <Image src="" /> Log-in to your account
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
                        Login
                      </Button>
                    </Segment>
                  </Form>
                  <Message>
                    New to us? <Link to="/register">Sign Up</Link>
                  </Message>
                </Grid.Column>
              </Transition>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
