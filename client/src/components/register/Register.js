import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

import isEmpty from "../../validation/is-empty";

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

	componentDidMount = () => {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/");
		} else {
			this.setState({ visible: true });
		}
	};

	componentWillReceieveProps = nextProps => {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	};

	onChange = (e, { name, value }) => this.setState({ [name]: value });

	onSubmit = e => {
		e.preventDefault();

		const newUser = {
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};
		this.props.registerUser(newUser, this.props.history);
	};

	render() {
		const { errors } = this.props;
		const { email, password, password2, visible } = this.state;

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
							verticalAlign="middle">
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
												size="large">
												Sign Up
											</Button>
										</Segment>
									</Form>
									<Message>Already have an account? Sign Up</Message>
								</Grid.Column>
							</Transition>
						</Grid>
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ registerUser }
)(withRouter(Register));
