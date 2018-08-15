import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  };

  render() {
    const { email, password, password2, errors } = this.state;

    return (
      <div className="register-form">
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
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="/logo.png" /> Create your account
            </Header>
            <Form size="large" error={errors}>
              <Segment stacked>
                <Form.Input
                  fluid
                  name="email"
                  error={errors.email}
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
                  error={errors.password}
                  onChange={this.onChange}
                  value={password}
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                {errors.password && <Message error content={errors.password} />}
                <Form.Input
                  fluid
                  name="password2"
                  error={errors.password2}
                  onChange={this.onChange}
                  value={password2}
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password Confirmation"
                  type="password"
                />
                {errors.password2 && (
                  <Message error content={errors.password2} />
                )}
                <Button onClick={this.onSubmit} color="teal" fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/register">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Register;
