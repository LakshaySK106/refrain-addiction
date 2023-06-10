import React from 'react';
import { Sidebar } from '../components';
import ConsultantCard from '../components/ConsultantCard';
import { usricon } from '../assets';
function Book() {
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
          <div className="container mx-auto flex-col flex-wrap">
            <ConsultantCard {...consultant} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
