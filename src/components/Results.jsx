import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ inputValue }) => {
  const results = calculateInvestmentResults(inputValue);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((resultData) => {
          const totalInterest =
            resultData.valueEndOfYear -
            resultData.annualInvestment * resultData.year -
            initialInvestment;
          const totalAmountInvested = resultData.valueEndOfYear - totalInterest;
          return (
            <tr key={resultData.year}>
              <td>{resultData.year}</td>
              <td>{formatter.format(resultData.valueEndOfYear)}</td>
              <td>{formatter.format(resultData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
