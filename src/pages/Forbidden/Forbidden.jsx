import React from "react";
import { Link } from "react-router-dom";

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <h1 className="text-9xl font-bold text-red-500">403</h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-4">
        Access Forbidden
      </h2>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        Sorry, you don’t have permission to access this page.  
        If you think this is a mistake, please contact the admin.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Forbidden;
