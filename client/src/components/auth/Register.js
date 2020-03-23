import React, {useState} from 'react';
import {Link} from 'react-router-dom';

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

    console.log(user);
  }

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
          />
          <label htmlFor="name">Name</label>          
        </div>

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

        <div>
          <input
            onChange={onChange}
            value={user.password2}
            error={errors.password2}
            name='password2'
            id="password2"
            type="password"
          />
          <label htmlFor="password2">Confirm Password</label>          
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default Register