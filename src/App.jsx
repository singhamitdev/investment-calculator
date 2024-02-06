import { useState } from "react";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import React from "react";

function App() {
  const [userValue, setUserValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isInputValid = userValue.duration >= 1;
  const handleChange = (inputIdentifier, newValue) => {
    setUserValue((prevInput) => {
      return { ...prevInput, [inputIdentifier]: +newValue };
    });
  };
  return (
    <>
      <UserInput userValue={userValue} onChange={handleChange} />
      {isInputValid ? (
        <Results inputValue={userValue} />
      ) : (
        <p className="center">Enter a duration greater than 0.</p>
      )}
    </>
  );
}

export default App;
