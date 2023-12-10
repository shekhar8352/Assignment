import React, { useState } from "react";
import BookingPartyForm from "./BookingPartyform";
// import "./styles.css"; // Make sure to adjust the path based on your project structure

const PartyInfo = () => {

    const [forms, setForms] = useState([{}]);
  
    const addForm = () => {
      setForms((prevForms) => [...prevForms, {}]);
    };

  return (
    <div className="form-container">
      <p>Booking Party Informational        <label>(Enter as much as possible)</label></p>
      {/* <label class="switch">
          Use information on account?
          <div class="toggle-switch">
            <input type="checkbox" checked />
            <span class="slider"></span>
          </div>
        </label> */}
        <div>
          <label className="switch-label">
            Use information on account?
            <input
              type="checkbox"
              // name="willHaveCourtReporter"
              // checked={courtReporting.willHaveCourtReporter}
              // onChange={handleCourtReportingChange}
              className="switch-input"
            />
            <span className="switch-slider"></span>
          </label>
        </div>
        
      <BookingPartyForm />

      <p>Opposition Party Informational </p>


      <div>
      <div>
      {forms.map((form, index) => (
        <div key={index} style={{ marginTop: '20px' }}>
          <BookingPartyForm />
        </div>
      ))}
      <button onClick={addForm} className="black-button">
        + Additional Information
      </button>
    </div>
    </div>
    </div>
  );
};

export default PartyInfo;
