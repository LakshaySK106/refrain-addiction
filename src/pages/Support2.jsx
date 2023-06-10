import React from 'react';
import { Link } from 'react-router-dom';
import { FaComment, FaQuestionCircle } from 'react-icons/fa';

function Support2() {
  const score = 43; 
  

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-2xl font-semibold mb-8">Yay! Your score is: {score}</div>

      <div className="flex flex-wrap justify-center">
        <Link to="/chat">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 sm:m-4">
            <FaComment className="inline-block mr-2" />
            Chat with us
          </button>
        </Link>
        <Link to="/Appointment/new">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 sm:m-4">
          <FaQuestionCircle className="inline-block mr-2" />
          Need assistance?
        </button>
        </Link>

      </div>
    </div>
  );
}

export default Support2;
