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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
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
    const { email, password, errors } = this.state;
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
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
              <Image src="/logo.png" /> Log-in to your account
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
                <Button onClick={this.onSubmit} color="teal" fluid size="large">
                  Login
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

export default Login;
