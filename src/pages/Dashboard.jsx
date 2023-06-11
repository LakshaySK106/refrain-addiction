import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Dashboard() {
  const [isApproved, setIsApproved] = useState(false);
  const [appointmentRequests, setAppointmentRequests] = useState([]);

  const history = useNavigate();
  const location = useLocation();
  console.log(location.state.id);
  const email = location.state.id;
  useEffect(() => {
    const fetchAppointmentRequests = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/appointments/requests',
        );
        setAppointmentRequests(response.data);
      } catch (error) {
        console.error('Error fetching appointment requests:', error);
      }
    };

    fetchAppointmentRequests();
  }, []);
  useEffect(() => {
    const handleCheckApproval = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/api/counselors/approval',
          {
            email,
          },
        );
        const { isApproved } = response.data;
        setIsApproved(isApproved);
      } catch (error) {
        console.error('Error checking counselor approval status:', error);
      }
    };

    handleCheckApproval();
  }, []);
  return (
    <div>
      {isApproved ? (
        <div className='h-screen flex flex-col items-center '>
          <h1 className='mt-14 font-bold text-4xl font-Montserrat mb-4'>Welcome to the Dashboard!</h1>
          <ul>
            {appointmentRequests.map((request) => (
              <li key={request._id}>User ID: {request.userId}</li>
            ))}
          </ul>
          <div className='text-xl mt-4'>
            <Link to="/" className='text-blue-500 hover:text-blue-900 hover:underline'>
            Click here... 
          </Link>
            to the logout!
          </div>
        </div>
      ) : (
        <div className='h-screen flex flex-col items-center justify-center'>
          <h1 className='text-red-500 font-bold text-4xl font-Montserrat mb-4'>NOT APPROVED!</h1>
          <p className='text-black text-xl'>
            Your account is pending approval. Please wait for the administrator
            to approve your account.
          </p>
          <div className='text-xl mt-4'>
            <Link to="/" className='text-blue-500 hover:text-blue-900 hover:underline'>
            Click here... 
          </Link>
           to return to the home page
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
