import React, { useEffect, useState } from 'react';
import { Sidebar } from '../components';
import useSharedStore from './Store';
const UserAppointments = ({ userId }) => {
  const [appointments, setAppointments] = useState([]);
  const email = useSharedStore((state) => state.sharedData);
  useEffect(() => {
    fetch(`http://localhost:8000/api/appointments/user/${email}`)
      .then((response) => response.json())
      .then((data) => setAppointments(data.appointments))
      .catch((error) => console.error('Error fetching appointments:', error));

    console.log(appointments);
  }, []);
  return (
    <div className="flex gap-10">
      <Sidebar />
      <h2>Booked Appointments</h2>
      <ul>
        {console.log(appointments)}
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            <div>
              <div>
                <span>
                  Meeting ID: {appointment.meetingId || 'Not generated yet'}
                </span>
                <span>Consultant: {appointment.consultantName}</span>
                <span>Time: {appointment.createdAt}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAppointments;
