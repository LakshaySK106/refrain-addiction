import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components';
import ConsultantCard from '../components/ConsultantCard';
import { usricon } from '../assets';
import axios from 'axios';
function Book() {
  const [consultants, setConsultants] = useState([]);
  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/counselors',
        );
        setConsultants(response.data);
      } catch (error) {
        console.error('Error fetching consultants:', error);
      }
    };

    fetchConsultants();
  }, []);

  const consultant = {
    photo: usricon,
    name: 'John Doe',
    specialty: 'Psychologist',
    age: 35,
  };
  console.log({ usricon });
  return (
    <>
      <div className="flex gap-10">
        <Sidebar />
        <div className="flex flex-col gap-10">
          <div>BOOK A NEW APPOINTMENT?</div>
          {/* <div className="container mx-auto flex-col flex-wrap">
          {consultants.map((consultant) => (
          <li key={consultant.id}>{consultant.name}</li>
        ))}
            <ConsultantCard {...consultant} />
          </div> */}
          <div className="grid grid-cols-3 gap-4">
            {consultants.map((consultant) => (
              <ConsultantCard
                key={consultant.id}
                photo={consultant.photo}
                name={consultant.name}
                specialty={consultant.speciality}
                age={consultant.age}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
