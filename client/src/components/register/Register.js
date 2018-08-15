import React, { Component } from "react";
import axios from "axios";
import isEmpty from "../../validation/is-empty";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Transition,
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
      visible: false,
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

  componentDidMount = () => {
    this.setState({ visible: true });
  };

  render() {
    const { email, password, password2, visible, errors } = this.state;

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
                    <Image src="" /> Create your account
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
                      <Form.Input
                        fluid
                        name="password2"
                        error={!isEmpty(errors.password2)}
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
                      <Button
                        onClick={this.onSubmit}
                        color="teal"
                        fluid
                        size="large"
                      >
                        Sign Up
                      </Button>
                    </Segment>
                  </Form>
                  <Message>
                    Already have an account? <Link to="/register">Sign Up</Link>
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

export default Register;
