import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/get_directions', {
        origin: 'origin_latitude,origin_longitude',
        destination: 'destination_latitude,destination_longitude',
        access_token: 'pk.eyJ1IjoidmlzaG51MTM0NSIsImEiOiJjbHQwdmc1YmQwem45Mm5saWV6c3JsMTgzIn0.cvwBdSKMul4_n1FyFoeHrg'
      });
      setDistance(response.data.distance);
      setDuration(response.data.duration);
    } catch (error) {
      console.error('Error:', error.response.data.error);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Get Directions</button>
      {distance && duration && (
        <div>
          <p>Distance: {distance} km</p>
          <p>Duration: {duration} minutes</p>
        </div>
      )}
    </div>
  );
}

export default App;