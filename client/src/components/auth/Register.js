import React, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';

const Register = () => {
  const initialFormState = {
    name: '',
    email: '',
    password: '',
    password2: ''
  }
  const [user, setUser] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const onChange = e => {
    const { name, value } = e.target;
    
    setUser({ ...user, [name]: value });
  }

  const onSubmit = e => {
    e.preventDefault();

    const newUser = user;

    props.registerUser(newUser, props.history)
  }

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push('/dashboard');
    }
  }, [])

  useEffect(()=>{
    if(props.errors) {
      setErrors(props.errors)
    }
  }, [props.errors])

  return (
    <div>
      <h1>
        Register
      </h1>

      <form noValidate onSubmit={onSubmit}>
        <div>
          <input
            onChange={onChange}
            value={user.name}
            error={errors.name}
            name='name'
            id="name"
            type="text"
            className={classnames("", {
              invalid: errors.name
            })}
          />
          <label htmlFor="name">Name</label>   
          <span className="red-text">{errors.name}</span>       
        </div>

        <div>
          <input
            onChange={onChange}
            value={user.email}
            error={errors.email}
            name='email'
            id="email"
            type="email"
            className={classnames("", {
              invalid: errors.email
            })}
          />
          <label htmlFor="email">Email</label>  
          <span className="red-text">{errors.email}</span>        
        </div>

        <div>
          <input
            onChange={onChange}
            value={user.password}
            error={errors.password}
            name='password'
            id="password"
            type="password"
            className={classnames("", {
              invalid: errors.password
            })}
          />
          <label htmlFor="password">Password</label>   
          <span className="red-text">{errors.password}</span>       
        </div>

        <div>
          <input
            onChange={onChange}
            value={user.password2}
            error={errors.password2}
            name='password2'
            id="password2"
            type="password"
            className={classnames("", {
              invalid: errors.password2
            })}
          />
          <label htmlFor="password2">Confirm Password</label>     
          <span className="red-text">{errors.password2}</span>     
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  )
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
  {registerUser}
)(withRouter(Register));
