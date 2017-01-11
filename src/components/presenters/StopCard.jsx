import React from 'react';

const StopCard = ({ stop_name, stop_id, stop_distance, route_names }) => {
  return (
    <li>
      <h3>{stop_name}</h3>
      <div>
        <em>Id: {stop_id}</em>
      </div>
      <div>
        Servicing routes: {(route_names || []).join(', ')}
      </div>
      <div>
        Distance: {stop_distance.toFixed(2)} meters
      </div>
    </li>
  );
};

export default StopCard;
