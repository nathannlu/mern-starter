import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

const Login = () => {
  const initialFormState = {
    email: "",
    password: ""
  };
  const [user, setUser] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const onChange = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const userData = user;
    props.loginUser(userData);
  };

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, []);

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, [props.auth]);

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  return (
    <div>
      <h1>Login</h1>
      <form noValidate onSubmit={onSubmit}>
        <div>
          <input
            onChange={onChange}
            value={user.email}
            error={errors.email}
            name="email"
            id="email"
            type="email"
            className={classnames("", {
              invalid: errors.email || errors.emailnotfound
            })}
          />
          <span className="red-text">
            {errors.email}
            {errors.emailnotfound}
          </span>
          <label htmlFor="email">Email</label>
        </div>

        <div>
          <input
            onChange={onChange}
            value={user.password}
            error={errors.password}
            name="password"
            id="password"
            type="password"
            className={classnames("", {
              invalid: errors.password || errors.passwordincorrect
            })}
          />
          <label htmlFor="password">Password</label>
          <span className="red-text">
            {errors.password}
            {errors.passwordincorrect}
          </span>
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
