// src/Components/DataFetcher.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>  // Adjust according to your data structure
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
