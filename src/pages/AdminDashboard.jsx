import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [counselors, setCounselors] = useState([]);

  useEffect(() => {
    const fetchCounselors = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/consultants',
        );
        setCounselors(response.data);
      } catch (error) {
        console.error('Error fetching counselors:', error);
      }
    };

    fetchCounselors();
  }, []);

  const handleApproveCounselor = async (id) => {
    try {
      await axios.patch(`http://localhost:8000/api/counselors/${id}/approve`);
      setCounselors((prevCounselors) =>
        prevCounselors.filter((counselor) => counselor._id !== id),
      );
    } catch (error) {
      console.error('Error approving counselor:', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Approval Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {counselors.map((counselor) => (
            <tr key={counselor._id}>
              {console.log(counselor._id)}
              <td>{counselor.name}</td>
              <td>{counselor.specialty}</td>
              <td>{counselor.isApproved ? 'Approved' : 'Pending Approval'}</td>
              <td>
                {!counselor.isApproved && (
                  <button onClick={() => handleApproveCounselor(counselor._id)}>
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
