
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const UserDashboard = () => {
  const [username, setUsername] = useState('John Doe');
  const [address, setAddress] = useState('2/342 XXX, YYY, ZZZ');
  const [dob, setDob] = useState('2005-01-01');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleSaveChanges = () => {

    alert('Changes saved!');
  };

  const handleCancel = () => {

    alert('Changes cancelled!');
  };

  return (
    <>
      <p className="text-center font-bold pt-8 pl-80 text-lg flex">Update Your Profile to Keep Engaged</p>
    <div className="w-screen pt-16 pl-64 flex">
      <div className="w-full max-w-md p-6 shadow-md shadow-slate-400 rounded-md flex-col flex bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">User Details</h2>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Username</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Address</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Date of Birth</label>
          <input
            type="date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Phone Number</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSaveChanges}
            className="mt-4 w-1/2 mr-2 p-2 bg-slate-600 text-white rounded-md"
          >
            Save Changes
          </button>
          <button
            onClick={handleCancel}
            className="mt-4 w-1/2 ml-2 p-2 bg-gray-400 text-white rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-center ml-16">
  <Link
    to="/home"
    className="p-2 bg-cyan-900 text-white rounded-md hover:bg-cyan-600 transform transition-all duration-300 ease-in-out hover:w-48 w-40 hover:h-10 h-8 flex items-center justify-center"
    style={{ overflow: 'hidden' }}
  >
    Go to Home Page
  </Link>
</div>

      </div>
    </>
  );
};

export default UserDashboard;
