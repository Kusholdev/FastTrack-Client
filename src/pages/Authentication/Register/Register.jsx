import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { createUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    // console.log(createUser)
    createUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      })
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Create An Account Now!</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="input"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <label className="label">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="input"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <label className="label">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'At least 6 characters' }
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          <div>
            <p>Already have an account?<Link to='/login'  className='text-[#71717A] btn btn-link -ml-3'>Login</Link> </p>
          </div>

        </fieldset>
        <button className="btn px-12 bg-[#CAEB66] mt-4">Register</button>


      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
