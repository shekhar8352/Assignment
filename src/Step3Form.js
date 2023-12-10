import React, { useState } from 'react';
import './StepThree.css'; // Import the CSS file

const Step3Form = () => {
  const [courtReporting, setCourtReporting] = useState({
    willHaveCourtReporter: false,
    arbitrationPlace: false,
    preferredArbitrationPlace: '',
    transcriptRequired: false,
    turnaroundTime: 'Select Turnaround Time',
    multilingual: false,
    nonEnglishLanguages: '',
    dailyRoughDraft: 'Select Option',
    realtimeReporting: 'Select Option',
  });

  const [additionalFeatures, setAdditionalFeatures] = useState({
    requireInterpretation: false,
    languagesToInterpret: '',
    requireCARTServices: false,
    needQuotePriorConfirmation: false,
    additionalRequests: '',
  });

  const handleCourtReportingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCourtReporting((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAdditionalFeaturesChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAdditionalFeatures((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="step3-form">
      {/* <h2>Step 3: Court Reporting & Additional Features</h2> */}
      <div>
        <p>Court Reporting</p>
        <div>
          <label className="switch-label">
            Will this matter plan to have a Court reporter
            <input
              type="checkbox"
              name="willHaveCourtReporter"
              checked={courtReporting.willHaveCourtReporter}
              onChange={handleCourtReportingChange}
              className="switch-input"
            />
            <span className="switch-slider"></span>
          </label>
        </div>
        {courtReporting.willHaveCourtReporter && (
          <div>
            <div>
              <label className="switch-label">
                Would you like an arbitration place court reporter
                <input
                  type="checkbox"
                  name="arbitrationPlace"
                  checked={courtReporting.arbitrationPlace}
                  onChange={handleCourtReportingChange}
                  className="switch-input"
                />
                <span className="switch-slider"></span>
              </label>
            </div>
            {courtReporting.arbitrationPlace && (
              <div>
                <label>
                  Is there a specific arbitration place court reporter you prefer?
                  </label>
                  <select
                    name="preferredArbitrationPlace"
                    value={courtReporting.preferredArbitrationPlace}
                    onChange={handleCourtReportingChange}
                    className='form-three-select'
                  >
                    <option value="">Select Option</option>
                    {/* Add options as needed */}
                  </select>
              </div>

            )}
            <div>
              <label className="switch-label">
                Will a transcript be required
                <input
                  type="checkbox"
                  name="transcriptRequired"
                  checked={courtReporting.transcriptRequired}
                  onChange={handleCourtReportingChange}
                  className="switch-input"
                />
                <span className="switch-slider"></span>
              </label>
            </div>
            {courtReporting.transcriptRequired && (
              <div>
                <label>Turnaround Time:</label>
                <select
                  name="turnaroundTime"
                  value={courtReporting.turnaroundTime}
                  onChange={handleCourtReportingChange}
                  className='form-three-select'
                >
                  <option value="">Standard</option>
                  {/* Add options as needed */}
                </select>
              </div>
            )}
            <div>
              <label className="switch-label">
                Multilingual
                <input
                  type="checkbox"
                  name="multilingual"
                  checked={courtReporting.multilingual}
                  onChange={handleCourtReportingChange}
                  className="switch-input"
                />
                <span className="switch-slider"></span>
              </label>
            </div>
            {courtReporting.multilingual && (
              <div>
                <label>Please add non-English languages you would need:</label>
                <input
                  type="text"
                  name="nonEnglishLanguages"
                  value={courtReporting.nonEnglishLanguages}
                  onChange={handleCourtReportingChange}
                  className='form-three-text'
                />
              </div>
            )}
            <div>
              <label>Daily Rough Draft:</label>
              <select
                name="dailyRoughDraft"
                value={courtReporting.dailyRoughDraft}
                onChange={handleCourtReportingChange}
                className='form-three-select'
              >
                <option value="Select Option">Select Option</option>
                {/* Add options as needed */}
              </select>
            </div>
            <div>
              <label>Realtime Reporting:</label>
              <select
                name="realtimeReporting"
                value={courtReporting.realtimeReporting}
                onChange={handleCourtReportingChange}
                className='form-three-select'
              >
                <option value="Select Option">Select Option</option>
                {/* Add options as needed */}
              </select>
            </div>
          </div>
        )}
      </div>
      <div>
        <p>Additional Features</p>
        <div>
          <label className="switch-label">
            Do you require interpretation?
            <input
              type="checkbox"
              name="requireInterpretation"
              checked={additionalFeatures.requireInterpretation}
              onChange={handleAdditionalFeaturesChange}
              className="switch-input"
            />
            <span className="switch-slider"></span>
          </label>
        </div>
        {additionalFeatures.requireInterpretation && (
          <div>
            <div>
              <label>Please list all languages to be interpreted:</label>
              <input
                type="text"
                name="languagesToInterpret"
                value={additionalFeatures.languagesToInterpret}
                onChange={handleAdditionalFeaturesChange}
                className='form-three-text'
              />
            </div>
          </div>
        )}
        <div>
          <label className="switch-label">
            Do you require CART services?
            <input
              type="checkbox"
              name="requireCARTServices"
              checked={additionalFeatures.requireCARTServices}
              onChange={handleAdditionalFeaturesChange}
              className="switch-input"
            />
            <span className="switch-slider"></span>
          </label>
        </div>
        <div>
          <label className="switch-label">
            Will you need a quote prior to confirmation?
            <input
              type="checkbox"
              name="needQuotePriorConfirmation"
              checked={additionalFeatures.needQuotePriorConfirmation}
              onChange={handleAdditionalFeaturesChange}
              className="switch-input"
            />
            <span className="switch-slider"></span>
          </label>
        </div>
        <div>
          <label>
            Please list any additional requests or considerations you might have at this time:
          </label>
          <input
            type="text"
            name="additionalRequests"
            value={additionalFeatures.additionalRequests}
            onChange={handleAdditionalFeaturesChange}
            className='form-final-text'
          />
        </div>
      </div>
    </div>
  );
};

export default Step3Form;
