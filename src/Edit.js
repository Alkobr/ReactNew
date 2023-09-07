import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Edit({ objectToEdit }) {
  // Define state variables for form fields
  const [deviceName, setDeviceName] = useState(objectToEdit.DeviceName);
  const [tisID, setTisID] = useState(objectToEdit.TISID);
  const [category, setCategory] = useState(objectToEdit.CategoryID);
  const [details, setDetails] = useState(objectToEdit.Details);
  const [notes, setNotes] = useState(objectToEdit.Notes);
  const [status, setStatus] = useState(objectToEdit.Status);

  // Function to handle form submission
  const handleSubmit = () => {
    // Create an object with the updated data
    const updatedData = {
      deviceName,
      tisID,
      category,
      details,
      notes,
      status,
    };

    // Send a PUT request to update the object in the database
    axios
      .put(`device/:${objectToEdit.ID}`, updatedData)
      .then((response) => {
        console.log("Data updated successfully!", response.data);
        // You can handle the response as needed, e.g., show a success message
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <div className="container">
      <h1 className="pb-5 pt-5 w-100 text-center">Edit Device</h1>
      <form>
        <fieldset>
          <div className="form-group pb-4">
            <label htmlFor="deviceName" className="form-label mt-4">DeviceName</label>
            <input
              type="text"
              className="form-control"
              id="deviceName"
              placeholder="Enter Device Name"
              autoComplete="on"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
            />

            <label htmlFor="tisID" className="form-label mt-4">TISID</label>
            <input
              type="text"
              className="form-control"
              id="tisID"
              placeholder="Enter TISID"
              autoComplete="on"
              value={tisID}
              onChange={(e) => setTisID(e.target.value)}
            />

            <label htmlFor="CategoryID" className="form-label mt-4">Category</label>
            <select
              className="form-select"
              id="CategoryID"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {/* Define your category options here */}
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              {/* Add more options as needed */}
            </select>

            <label htmlFor="Details" className="form-label mt-4">Details</label>
            <input
              type="text"
              className="form-control"
              id="Details"
              placeholder="Enter Details"
              autoComplete="on"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            <label htmlFor="Notes" className="form-label mt-4">Notes</label>
            <input
              type="text"
              className="form-control"
              id="Notes"
              placeholder="Enter Notes"
              autoComplete="on"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <label htmlFor="Status" className="form-label mt-4">Status</label>
            <input
              type="text"
              className="form-control"
              id="Status"
              placeholder="Enter Status"
              autoComplete="on"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </fieldset>
        <div className="form-group pb-4 w-100 text-center">
          <button type="button" className="btn btn-dark w-25 mt-4" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
