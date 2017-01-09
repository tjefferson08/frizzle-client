import React from 'react';

const StopDetails = ({ params }) => {
  return (
    <div>
      <h3>{params.stop_id}</h3>
      <div>
        I'm a details card.
      </div>
    </div>
  );
};

export default StopDetails;
