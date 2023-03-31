import React, { useEffect, useState } from "react";
import './App.css'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Database</h1>
      <ul classname='dataContainer'>
        {data.map((item, index) => (
          <li key={index} className="dataInsideContainer">{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
