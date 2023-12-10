import React, { useState } from 'react';

const Step2Form = () => {
  const [bookLogistics, setBookLogistics] = useState({
    coverPageFile: null,
    styleOfCause: '',
    courtFile: '',
    bookingDate: '',
    startTime: '',
    endTime: '',
    timeZone: '',
    arbitrators: [{ name: '', email: '' }],
    otherArbitrators: [],
    tribunalSecretary: false,
    secretaryName: '',
    secretaryEmail: '',
    witnesses: [{ name: '', email: '' }],
    otherWitnesses: [],
  });

  const [virtualLogistics, setVirtualLogistics] = useState({
    requireVCM: false,
    particularVCM: '',
    virtualPlatform: '',
    numVirtualRooms: '',
    documentManagingServices: false,
    specialAccommodations: '',
    recordMatter: false,
  });

  const handleBookLogisticsChange = (e) => {
    const { name, value, type, files } = e.target;
    setBookLogistics((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleVirtualLogisticsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVirtualLogistics((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleArbitratorChange = (index, e) => {
    const { name, value } = e.target;
    setBookLogistics((prevData) => {
      const newArbitrators = [...prevData.arbitrators];
      newArbitrators[index][name] = value;
      return { ...prevData, arbitrators: newArbitrators };
    });
  };

  const handleAddArbitrator = () => {
    setBookLogistics((prevData) => ({
      ...prevData,
      otherArbitrators: [...prevData.otherArbitrators, { name: '', email: '' }],
    }));
  };

  const handleWitnessChange = (index, e) => {
    const { name, value } = e.target;
    setBookLogistics((prevData) => {
      const newWitnesses = [...prevData.witnesses];
      newWitnesses[index][name] = value;
      return { ...prevData, witnesses: newWitnesses };
    });
  };

  const handleAddWitness = () => {
    setBookLogistics((prevData) => ({
      ...prevData,
      otherWitnesses: [...prevData.otherWitnesses, { name: '', email: '' }],
    }));
  };

  return (
    <div className='form-container'>
      {/* <h2>Step 3: Book Logistics & Virtual Logistics</h2> */}

      {/* Book Logistics Section */}
      <div className='form-container'>
        <p>Book Logistics</p>
        <div>
          <label>
            Update Cover Page (Optional):
            <input
              type="file"
              name="coverPageFile"
              onChange={handleBookLogisticsChange}
            />
          </label>
        </div>
        <div className='form-row'>
        <div>
          <label>
            Style of Cause:
            <input
              type="text"
              name="styleOfCause"
              value={bookLogistics.styleOfCause}
              onChange={handleBookLogisticsChange}
              className='normal-text'
            />
          </label>
        </div>

        <div>
          <label>
            Court File:
            <input
              type="text"
              name="courtFile"
              value={bookLogistics.courtFile}
              onChange={handleBookLogisticsChange}
              className='normal-text'
            />
          </label>
        </div>

        <div>
          <label>
            Booking Date:
            <input
              type="date"
              name="bookingDate"
              value={bookLogistics.bookingDate}
              onChange={handleBookLogisticsChange}
            />
          </label>
        </div>
        </div>
        <div className='form-row'>
        <div>
          <label>
            Start Time:
            <input
              type="text"
              name="startTime"
              value={bookLogistics.startTime}
              onChange={handleBookLogisticsChange}
              className='normal-text'
            />
          </label>
        </div>
        <div>
          <label>
            End Time:
            <input
              type="text"
              name="endTime"
              value={bookLogistics.endTime}
              onChange={handleBookLogisticsChange}
              className='normal-text'
            />
          </label>
        </div>

        <div>
          <label>
            Time Zone:
            <input
              type="text"
              name="timeZone"
              value={bookLogistics.timeZone}
              onChange={handleBookLogisticsChange}
              className='normal-text'
            />
          </label>
        </div>
        </div>
          <p>Arbitrators</p>
        <div className='form-two-two'>
          {bookLogistics.arbitrators.map((arbitrator, index) => (
            <div key={index} className='form-row'>
              <label className='form-two-two'>
                Name:
                <input
                  type="text"
                  name="name"
                  value={arbitrator.name}
                  onChange={(e) => handleArbitratorChange(index, e)}
                  className='normal-text'
                />
              </label>
              <label className='form-two-two'>
                Email:
                <input
                  type="text"
                  name="email"
                  value={arbitrator.email}
                  onChange={(e) => handleArbitratorChange(index, e)}
                  className='normal-text'
                />
              </label>
            </div>
          ))}
          <button type="button" onClick={handleAddArbitrator}>
            +
          </button>
        </div>
        <div>
          <label className='switch-label'>
            Tribunal Secretary?
            <input
              type="checkbox"
              name="tribunalSecretary"
              checked={bookLogistics.tribunalSecretary}
              onChange={handleBookLogisticsChange}
              className="switch-input"
            />
            <span className="switch-slider"></span>
          </label>
          {bookLogistics.tribunalSecretary && (
            <div className='form-row'>
              <label className='form-two-two'>
                Secretary Name:
                <input
                  type="text"
                  name="secretaryName"
                  value={bookLogistics.secretaryName}
                  onChange={handleBookLogisticsChange}
                  className='normal-text'
                />
              </label>
              <label className='form-two-two'>
                Secretary Email:
                <input
                  type="text"
                  name="secretaryEmail"
                  value={bookLogistics.secretaryEmail}
                  onChange={handleBookLogisticsChange}
                  className='normal-text'
                />
              </label>
            </div>
          )}
        </div>
        <div>
          <p>Witnesses</p>
          {bookLogistics.witnesses.map((witness, index) => (
            <div key={index} className='form-row'>
              <label className='form-two-two'>
                Name:
                <input
                  type="text"
                  name="name"
                  value={witness.name}
                  onChange={(e) => handleWitnessChange(index, e)}
                  className='normal-text'
                />
              </label>
              <label className='form-two-two'>
                Email:
                <input
                  type="text"
                  name="email"
                  value={witness.email}
                  onChange={(e) => handleWitnessChange(index, e)}
                  className='normal-text'
                />
              </label>
            </div>
          ))}
          <button type="button" onClick={handleAddWitness}>
            +
          </button>
        </div>
      </div>

      {/* Virtual Logistics Section */}
      <div className='form-container'>
        <p>Virtual Logistics</p>
        <div>
          <label className='switch-label'>
            Do you require a VCM (Virtual case manager)?
            <input
              type="checkbox"
              name="requireVCM"
              checked={virtualLogistics.requireVCM}
              onChange={handleVirtualLogisticsChange}
              className="switch-input"
            />
          </label>
          <span className="switch-slider"></span>

        </div>
        {virtualLogistics.requireVCM && (
          <div>
            <label>
              Is there a particular VCM you want:
              <input
                type="text"
                name="particularVCM"
                value={virtualLogistics.particularVCM}
                onChange={handleVirtualLogisticsChange}
                className='normal-text'
              />
            </label>
          </div>
        )}
        <div className='form-row'>
        <div>

          <label>
            Select a virtual platform:
            <input
              type="text"
              name="virtualPlatform"
              value={virtualLogistics.virtualPlatform}
              onChange={handleVirtualLogisticsChange}
              className='normal-two-text'
            />
          </label>
        </div>
        <div>

          <label>
            Number of virtual breakout rooms:
            <input
              type="text"
              name="numVirtualRooms"
              value={virtualLogistics.numVirtualRooms}
              onChange={handleVirtualLogisticsChange}
              className='normal-two-text'
            />
          </label>
        </div>
        </div>
        <div>
          <label className='switch-label'>
            Do you need us to provide document managing services?
            <input
              type="checkbox"
              name="documentManagingServices"
              checked={virtualLogistics.documentManagingServices}
              onChange={handleVirtualLogisticsChange}
              className="switch-input"
            />
          <span className="switch-slider"></span>
          </label>
          {virtualLogistics.documentManagingServices && (
            <div className='form-row'>
            <div>
              <label>
                Do you have any special accommodations that our IT team can book prior to the start date:
                </label>
                <input
                  type="text"
                  name="specialAccommodations"
                  value={virtualLogistics.specialAccommodations}
                  onChange={handleVirtualLogisticsChange}
                  className='normal-text'
                />
            
            </div>

            <div>
              <label className="switch-label">
                Would you like the matter to be recorded?
                <input
                  type="checkbox"
                  name="arbitrationPlace"
                  checked={!virtualLogistics.recordMatter}
                  onChange={handleVirtualLogisticsChange}
                  className="switch-input"
                />
                <span className="switch-slider"></span>
              </label>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step2Form;
