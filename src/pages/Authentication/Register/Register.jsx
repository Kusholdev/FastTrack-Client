import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { createUser, updateUserProfile } = useAuth();
  const [profilePic, setProfilePic] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    // console.log(createUser)
    createUser(data.email, data.password)
      .then(result => {
        console.log(result.user);

        // update userInfo in the database


        // update user profile in firebase
        const updateProfile = {
          displayName: data.name,
          photoURL: profilePic


        }
        updateUserProfile(updateProfile)
          .then(()=> {
            console.log("profile info is updated");
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.error(error);
      })
  };

  // Image upload handler
  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    console.log(image);

    const formData = new FormData();
    formData.append('image', image);
    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_key}`, formData);

    setProfilePic(res.data.data.url);

  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Create An Account Now!</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          {/* Name field */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="input"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          {/* Name field */}
          <label className="label">Upload Image</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="input"
            placeholder="Your Image"
          />

          {/* Email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="input"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          {/* password field */}
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
            <p>Already have an account?<Link to='/login' className='text-[#71717A] btn btn-link -ml-3'>Login</Link> </p>
          </div>

        </fieldset>
        <button className="btn px-12 bg-[#CAEB66] mt-4">Register</button>


      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
