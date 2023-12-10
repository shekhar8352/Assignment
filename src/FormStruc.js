import React, { useState } from "react";
import PartyInfo from "./PartyInfo";
// import BookingForm from "./BookingForm";
import Step3Form from "./Step3Form";
import Step2Form from "./Step2Form";

const FormStruc = () => {
  const [formData, setFormData] = useState({
    step: 1,
    // Add other form fields here
    name: "",
    email: "",
    // Add more fields as needed
  });

  // const nextStep = () => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     step: prevData.step + 1,
  //   }));
  // };

  // const prevStep = () => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     step: prevData.step - 1,
  //   }));
  // };

  const goToStep = (step) => {
    setFormData((prevData) => ({
      ...prevData,
      step,
    }));
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const renderForm = () => {
    switch (formData.step) {
      case 1:
        return (
          <div>
            {/* <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            /> */}
              {/* <PartyInfo /> */}
              {/* hello */}
            {/* <button onClick={nextStep}>Next</button> */}
          </div>
        );
      case 2:
        return (
          <div>
            {/* <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            /> */}
              <PartyInfo />
            {/* <button onClick={nextStep}>Next</button> */}
          </div>
        );
      case 3:
        return (
          <div>
            <Step2Form />
            {/* <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button> */}
          </div>
        );
        case 4:
        return (
          <div>
            <Step3Form />
            {/* <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button> */}
          </div>
        );
      // Add more cases for additional steps

      default:
        return null;
    }
  };

  // function getRandomText() {
  //   // Replace this function with your logic to generate random text
  //   const texts = ["initial information", "Party Information", "logistics", "Adittional services"];
  //   const randomIndex = Math.floor(Math.random() * texts.length);
  //   return texts[randomIndex];
  // }

  // function getRandomText() {
  //   const texts = ["initial information", "Party Information", "logistics", "Additional services"];
  //   let currentIndex = 0;
  
  //   // Check if currentIndex exceeds the array length, reset to 0
  //   if (currentIndex >= texts.length) {
  //     currentIndex = 0;
  //   }
  
  //   const selectedText = texts[currentIndex];
  //   currentIndex += 1;
  
  //   return selectedText;
  // }

  const renderNavBar = () => {
    const steps = ["1", "2", "3", "4"]; // Add more steps as needed
    // const texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];
    const texts = ["initial information", "Party Information", "logistics", "Additional services"];
    // const randomIndex = Math.floor(Math.random() * texts.length);
    return (


      <div className="nav-bar">
  {steps.map((step, index) => (
    <div 
      key={index}
      style={{
        position: "relative",
        display: "inline-block",
        textAlign: "center",
        // borderColor: index + 1 === formData.step ? "black" : "white",

      }}
    >
      <div 
        style={{
          backgroundColor: index + 1 === formData.step ? "white" : "#bbb",
          border: index + 1 === formData.step ? "2px solid #0047AB" : "2px solid black",
          borderRadius: "50%",
          fontWeight: index + 1 === formData.step ? "bold" : "normal",
          cursor: "pointer",
          height: "50px",
          width: "50px",
          textAlign: "center",
          // padding: "15px 10px",
          color: index + 1 === formData.step ? "#0047AB" : "black",
          zIndex: index + 1 === formData.step ? "2" : "1",
          position: "relative",
          padding: "10px",
              margin: "25px 65px",
              fontSize: "35px",
        }}
        onClick={() => goToStep(index + 1)}
      >
        {step}
      </div>
      <div
        style={{
          fontSize: "16px",
          color: index + 1 === formData.step ? "#0047AB" : "black",
        }}
      >
       {texts[index]}
      </div>
      {index > 0 && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "80px",
            width: "200px", // Adjust the width of the line as needed
            height: "2px", // Adjust the height of the line as needed
            backgroundColor: "black",
          }}
        />
      )}
    </div>
  ))}
</div>

    );
  };

  return (
    <div>
      {renderNavBar()}
      {/* <h2>Multi-Step Form - {formData.step}</h2> */}
      {renderForm()}
    </div>
  );
};

export default FormStruc;