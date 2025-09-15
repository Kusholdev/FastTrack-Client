import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png';
import FastTrackLogo from '../pages/shared/Logo/FastTrackLogo';

const AuthLayout = () => {
  return (
    <div className="p-12 bg-base-200">
      <div>
        <FastTrackLogo />
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img
            src={authImg}
            className="max-w-sm rounded-lg shadow-2xl bg-transparent object-contain"
            alt="Authentication"
          />
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
