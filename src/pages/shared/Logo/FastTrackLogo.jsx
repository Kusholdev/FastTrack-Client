import React from 'react';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router';
const FastTrackLogo = () => {
  return (
    <Link to='/'>
      <div className="flex items-end">
        <img className="mb-2" src={logo} alt="Loading, please wait..." />
        <p className="text-3xl -ml-4 font-extrabold">FastTrack</p>
      </div>
    </Link>
  );
};

export default FastTrackLogo;
