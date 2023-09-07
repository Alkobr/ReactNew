import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateNew() {
  // Define state variables for form fields
  const [deviceName, setDeviceName] = useState("");
  const [tisID, setTisID] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    // Create an object with the form data
    const formData = {
      deviceName,
      tisID,
      category,
      details,
      notes,
      status,
    };

    // Send a POST request to your backend API to save the data
    axios
      .post("/device", formData)
      .then((response) => {
        console.log("Data saved successfully!", response.data);
        // Clear the form fields
        setDeviceName("");
        setTisID("");
        setCategory("");
        setDetails("");
        setNotes("");
        setStatus("");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div className="container">
      <h1 className="pb-5 pt-5 w-100 text-center">Create New Device</h1>
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

export default CreateNew;
