import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  const initialFormState = {
    email: '',
    password: ''
  }
  const [user, setUser] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const onChange = e => {
    const { name, value } = e.target;
    
    setUser({ ...user, [name]: value });
  }

  const onSubmit = e => {
    e.preventDefault();

    console.log(user);
  }

  return (
    <div>
      <h1>
        Login
      </h1>
      <form noValidate onSubmit={onSubmit}>
        <div>
          <input
            onChange={onChange}
            value={user.email}
            error={errors.email}
            name='email'
            id="email"
            type="email"
          />
          <label htmlFor="email">Email</label>          
        </div>

        <div>
          <input
            onChange={onChange}
            value={user.password}
            error={errors.password}
            name='password'
            id="password"
            type="password"
          />
          <label htmlFor="password">Password</label>          
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default Login;