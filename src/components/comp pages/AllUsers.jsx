import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3000/users');
      setUsers(res.data);
    } catch (error) {
      console.error('Failed to fetch users', error);
      toast.error('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      toast.success('Deleted Successfully', { position: 'top-right' });
      fetchUsers();
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: 'top-right' });
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-600 text-lg">Loading users...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col gap-5 items-center bg-gray-100 p-8">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">All Users</h1>

      {users.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-xl text-gray-600 mb-4">No users found.</p>
          <button
            onClick={() => navigate('/dashboard/createusers')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Create User
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white shadow-md h-auto w-[320px] flex flex-col rounded-xl p-4 text-left gap-2">
              <img
                className="h-24 w-24 rounded-full object-cover mx-auto mb-4"
                src={user.image || user.username}
                alt="User"
              />
              <h2 className="text-xl font-semibold text-center text-gray-800">{user.username}</h2>
              <div className="mt-1 text-sm text-gray-600">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Mobile:</strong> {user.phone}</p>
                <p><strong>Specializations:</strong> {user.specializations}</p>
                <p><strong>Services:</strong> {user.services}</p>
                <p><strong>Year Experience:</strong> {user.yearsExperience}</p>
                <p><strong>Working Days:</strong> {user.workingDays}</p>
              </div>
              <div className="w-full flex justify-around mt-3">
                <button className="bg-sky-500 hover:bg-sky-700 text-white p-[9px] rounded-md">
                  <Link to={`/edituser/${user.id}`}>Edit Profile</Link>
                </button>
                <button
                  className="bg-red-600 text-white p-[9px] rounded-md hover:bg-red-700"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllUsers;
