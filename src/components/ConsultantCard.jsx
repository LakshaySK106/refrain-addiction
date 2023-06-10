import React from 'react';

const ConsultantCard = ({ photo, name, specialty, age }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img className=" w-full" src={photo} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{specialty}</p>
        <p className="text-gray-700 text-base">{age} years old</p>
      </div>
    </div>
  );
};

export default ConsultantCard;
