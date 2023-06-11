import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sideadmin } from '../components';

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
    <div className='flex h-screen '>
      <div className='mr-20'>
        <Sideadmin />
      </div>
      <div className='mx-auto'>
        <table>
        <thead>
          <tr className='flex'>
            <th className='text-xl mt-8 mr-44'>Name</th>
            <th className='text-xl mt-8 mr-44'>Specialty</th>
            <th className='text-xl mt-8 mr-44'>Approval Status</th>
            <th className='text-xl mt-8 mr-44'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {counselors.map((counselor) => (
            <tr className='' key={counselor._id}>
              {console.log(counselor._id)}
              <div className='flex flex-row mt-4'>
              <td className='  mt-2'>{counselor.name}</td>
              <td className='  ml-40 mt-2'>{counselor.speciality}</td>
              <td className=' ml-52 mt-2'>{counselor.isApproved ? 'Approved' : 'Pending Approval'}</td>
              <td className='ml-48 '>
                {!counselor.isApproved && (
                  <button className=' bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleApproveCounselor(counselor._id)}>
                    Approve
                  </button>
                )}
              </td>
            </div>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
