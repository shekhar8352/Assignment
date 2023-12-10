import React, { useState } from 'react';

const BookingPartyForm = () => {
  const [formData, setFormData] = useState({
    useAccountInfo: false,
    firmName: '',
    bookingContactName: '',
    phoneNumber: '',
    billingAddress: '',
    zipCode: '',
    countryCity: '',
    role: 'Select Role',
    representedClient: '',
    leadCourseInformation: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className='form-container'>
      {/* <h2>Booking Party Informational Form</h2> */}
      {/* <div>
        
      </div> */}
      <div className='form-row three-row'>
      <div className='three-row-left'>

        <label>Firm Name:</label>
        <input
          type="text"
          name="firmName"
          value={formData.firmName}
          onChange={handleChange}
          className='normal-text'
        />
      </div>

      <div className='three-row-middle'>
        <label>Booking Contact Name:</label>
        <input
          type="text"
          name="bookingContactName"
          value={formData.bookingContactName}
          onChange={handleChange}
          className='normal-text'
        />

      </div>

      <div className='three-row-right'>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className='normal-text'
        />

      </div>
      </div>


      <div className='form-row'>
      <div className='three-row-left'>

        <label>Billing Address:</label>
        <input
          type="text"
          name="billingAddress"
          value={formData.billingAddress}
          onChange={handleChange}
          className='normal-text'
        />
      </div>

      <div className='three-row-middle'>

        <label>Zip Code:</label>
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className='normal-text'
        />
      </div>
      <div className='three-row-right'>

        <label>Country/City:</label>
        <input
          type="text"
          name="countryCity"
          value={formData.countryCity}
          onChange={handleChange}
          className='normal-text'
        />
      </div>
      </div>

      <div className='form-row two-row'>

      <div className='drop-down'>
        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="Select Role" disabled>Select Role</option>
          <option value="Role1">Role 1</option>
          <option value="Role2">Role 2</option>
          {/* Add more role options as needed */}
        </select>

      </div>

      <div>
        <label>Represented Client:</label>
        <input
          type="text"
          name="representedClient"
          value={formData.representedClient}
          onChange={handleChange}
          className='normal-text'
        />

      </div>
      </div>

      <div className='form-row two-row'>
      <div>
        <label>Lead Course Information:</label>
        <input
          type="text"
          name="leadCourseInformation"
          value={formData.leadCourseInformation}
          onChange={handleChange}
          className='normal-text'
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='normal-text'
        />

      </div>
      </div>
    </div>
  );
};

export default BookingPartyForm;
