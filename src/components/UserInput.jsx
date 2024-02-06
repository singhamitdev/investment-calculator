import React from "react";

const UserInput = ({ userValue, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment </label>
          <input
            type="number"
            required
            value={userValue.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment </label>
          <input
            type="number"
            required
            value={userValue.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return </label>
          <input
            type="number"
            required
            value={userValue.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration </label>
          <input
            type="number"
            required
            value={userValue.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
