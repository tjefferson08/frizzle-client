import React from 'react';

const Stop = ({ stop_name, stop_id, stop_distance }) => {
  return (
    <li>
      <h3>{stop_name}</h3>
      <div>
        <em>Id: {stop_id}</em>
      </div>
      <div>
        Distance: {stop_distance} meters
      </div>
    </li>
  );
};

export default Stop;
