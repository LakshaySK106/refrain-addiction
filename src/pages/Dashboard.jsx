import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
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

  const handleGenerateMeetingCode = async (mail) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/appointments/meeting`,
        {
          mail,
        },
      );

      setAppointmentRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === response.data.appointment._id
            ? response.data.appointment
            : request,
        ),
      );
    } catch (error) {
      console.error('Error generating meeting code:', error);
    }
  };

  return (
    <div>
      {isApproved ? (
        <div>
          <h1>Welcome to the Counselor Dashboard!</h1>
          <ul>
            {appointmentRequests.map((request) => (
              <li key={request._id}>
                <strong>Email ID:</strong> {request.mail}
                {console.log(request)}
                {request.meetId ? (
                  <span> | Meeting ID: {request.meetId}</span>
                ) : (
                  <button
                    onClick={() => handleGenerateMeetingCode(request.mail)}
                  >
                    Generate Meeting Code
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h1>Not Approved</h1>
          <p>
            Your account is pending approval. Please wait for the administrator
            to approve your account.
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
