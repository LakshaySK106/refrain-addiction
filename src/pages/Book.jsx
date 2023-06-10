import React from 'react';
import { Sidebar } from '../components';
import ConsultantCard from '../components/ConsultantCard';
function Book() {
  return (
    <>
      <div className="flex gap-10">
        <Sidebar />
        BOOK A NEW APPOINTMENT?
        <ConsultantCard />
      </div>
    </>
  );
}

export default Book;
