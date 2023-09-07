import React, { useState } from 'react';

const AddCheckout = ({ onCheckout }) => {
  const [idname, setIdName] = useState('');
  const [department, setDepartment] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [defualtH, setDefualtH] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [course, setCourse] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a checkout object with form data
    const checkoutData = {
      idname,
      deviceName,
      checkoutDate,
      course,
      notes,
    };

    // Call the parent component's onCheckout function
    onCheckout(checkoutData);
  };

  return (
    <div>
      <h2 className ="pb-5 pt-5 w-100 text-center" > Checkout</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group pb-4">
            <label>Borrower Name/ID:</label>
            <input
              type="text"
              className="form-control "
              value={idname}
              onChange={(e) => setIdName(e.target.value)}
              required
            />
          </div>

          <div className="form-group pb-4">
            <label>Department:</label>
            <input
              type="text"
              className="form-control  "
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>

          <div className="form-group  pb-4">
            <label>Device Name:</label>
            <input
              type="text"
              className="form-control  "
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              required
            />
          </div>



          <div className="form-group  pb-4">
            <label>Default Hours:</label>
            <input
              type="text"
              className="form-control  "
              value={defualtH}
              onChange={(e) => setDefualtH(e.target.value)}
              required
            />
          </div>


          <div className="form-group  pb-4">
            <label>Checkout Date:</label>
            <input
              type="date"
              className="form-control"
              value={checkoutDate}
              onChange={(e) => setCheckoutDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group pb-4 ">
            <label>Course:</label>
            <input
              type="text"
              className="form-control "
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
          </div>

          <div className="form-group  pb-4">
            <label>Notes:</label>
            <textarea
              className="form-control"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group  pb-4 w-100 text-center ">
            <button type="button" className="btn btn-primary w-25 mt-4 ">
            Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCheckout;