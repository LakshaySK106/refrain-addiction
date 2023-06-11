import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components';
import ConsultantCard from '../components/ConsultantCard';
import { usricon } from '../assets';
import axios from 'axios';
function Book() {
  const [consultants, setConsultants] = useState([]);
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const handleConsultantSelect = (consultantId) => {
    setSelectedConsultant(consultantId);
  };
  const handleBookAppointment = async () => {
    try {
      // Make an API call to book the appointment
      const response = await axios.post(
        'http://localhost:8000/api/appointments/book',
        {
          userId: 'user-id', // Replace with the actual user ID
          consultantId: selectedConsultant,
        },
      );
      setBookingSuccess(true);
      console.log(response.data); // Optional: Handle the response as needed

      // Reset the selected consultant after booking
      setSelectedConsultant(null);
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };
  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/counselors',
        );
        const cdata = response.data;
        const filteredData = cdata.filter((counselor) => {
          return counselor.isApproved === true;
        });
        setConsultants(filteredData);
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
              <>
                <button onClick={() => handleConsultantSelect(consultant._id)}>
                  <ConsultantCard
                    key={consultant.id}
                    photo={consultant.photo}
                    name={consultant.name}
                    specialty={consultant.speciality}
                    age={consultant.age}
                  />
                </button>
              </>
            ))}
          </div>
          <div>
            {selectedConsultant && <div>Booking for {selectedConsultant}</div>}
            {selectedConsultant && (
              <button onClick={handleBookAppointment}>Book Appointment</button>
            )}
            {bookingSuccess && <p>Appointment has been booked successfully!</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
