import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import logox from './icons8-plus-50.png';

function App() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios
      .get("/devices")
      .then((res) => {
        setDevices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Function to handle deleting a device
  const handleDeleteDevice = (ID) => {
    // Send a DELETE request to your backend API to delete the object
    axios
      .delete(`/devices/${ID}`)
      .then(() => {
        // If deletion is successful, update the devices state to reflect the changes
        setDevices(devices.filter((device) => device.ID !== ID));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
      <div className='container mt-5'>
        <div className='container'>
          <div className="btn btn-dark mb-4">
            Create New <img src={logox} alt="logo" width="20px" />
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">DeviceName</th>
              <th scope="col">TISID</th>
              <th scope="col">Details</th>
              <th scope="col">Notes</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, index) => (
              <tr key={index}>
                <td>{device.DeviceName}</td>
                <td>{device.TISID}</td>
                <td>{device.CategoryID}</td>
                <td>{device.Details}</td>
                <td>{device.Notes}</td>
                <td>{device.Status}</td>
                <td>
                  <Link to="/edit" className="btn btn-outline-dark">
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => handleDeleteDevice(device.ID)} // Pass the device id to the delete function
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  );
}

export default App;
