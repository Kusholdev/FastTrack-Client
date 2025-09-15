import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth';
const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';

  const { signIn } = useAuth();

  const onSubmit = (data) => {
    console.log(data);

    signIn(data.email, data.password)
      .then(result => {
        console.log(result.user);
        navigate(from);
      })
      .catch(error => {
        console.error(error)
      })
  };

  return (
    <div>
      <h1 className=" text-[#000000]"> Login with FastTrack</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register('email', { required: "Email is required" })}
            className="input"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <label className="label">Password</label>
          <input
            type="password"
            {...register('password', {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" }
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <div>
            <p>Don't have an account?<Link to='/register' className='text-[#71717A] btn btn-link -ml-3'>register</Link> </p>
          </div>
        </fieldset>
        <button className="btn bg-[#CAEB66] mt-4 px-40">Login</button>

      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
