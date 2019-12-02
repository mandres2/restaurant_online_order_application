import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions-Business";

import "./Auth.scss";


/* Global Variable for checking the sign-in option */
let businessSignUp = false;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }


  /* -------------------------------- */
  updateLoginOption = (event) => {
    if(businessSignUp === false) {
      businessSignUp = true;
    } else {
      businessSignUp = false;
    }  

    /* 
    if(this.state.businessSignUp === false) {
      this.setState({ businessSignUp: true });
    } else {
      this.setState({ businessSignUp: false });
    } */
    
    console.log("businessSignUp =>", businessSignUp);
  }
  /* -------------------------------- */

  componentDidMount() {
    console.log(this.state);
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  fillDemoEmail = () => {
    this.setState({ email: "test@test.com" });
  };

  fillDemoPassword = () => {
    this.setState({ password: "test123" });
  };

  render() {
    const { errors } = this.state;

    return (
      
      <div className="base-wrapper">
        <div className="auth-header">Sign In</div>
        <form className="auth-form" noValidate onSubmit={this.onSubmit}>
          <div className="auth-group">
            <label>
              <div className="auth-label">Email address</div>
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className="auth-input"
              />
              <div className="auth-error">
                {errors.email}
                {errors.emailnotfound}
              </div>
            </label>
          </div>

          <div className="auth-group">
            <label>
              <div className="auth-label">Password</div>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className="auth-input"
              />
              <div className="auth-error">
                {errors.password}
                {errors.passwordincorrect}
              </div>
            </label>
          </div>
{/* ------------------------------------------------------------- */}
          <div className="auth-group">
            <div className="auth-label">Sign Up as a Business Owner</div>
            <label className="switch">
              <input 
                type="checkbox"
                onChange={this.updateLoginOption}
              />
              <span class="slider round"></span>
            </label>
          </div>
{/* ------------------------------------------------------------- */}

          <div>
            <button type="submit" className="auth-button">
              Login
            </button>
          </div>
          <div className="bottom-group">
            <Link to="/register-business" className="link">
              Sign up as a Business Owner
            </Link>
          </div>
          
          <div className="bottom-group">
            <Link to="/register-customer" className="link">
              Sign up as a Customer
            </Link>
          </div>

        </form>
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
)(Login);
