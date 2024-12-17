import React, { useState } from "react";
import Header from "./Header";

const Fees = () => {
  const [applicationNo, setApplicationNo] = useState("");
  const [scholarship, setScholarship] = useState("no");
  const [category, setCategory] = useState("general");
  const [fees, setFees] = useState("");
  const [error, setError] = useState("");

  const handleScholarshipChange = (e) => {
    const value = e.target.value;
    setScholarship(value);
    if (value === "yes") {
      setCategory("general");
    }
    setError(""); // Clear any previous error
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setError(""); // Clear any previous error
  };

  const handleFeesChange = (e) => {
    const value = e.target.value;
    setFees(value);
    setError(""); // Clear any previous error
  };

  const handleApplicationNoChange = (e) => {
    setApplicationNo(e.target.value);
    setError(""); // Clear any previous error
  };

  const validateApplicationNo = () => {
    const regex = /^EN\d{8}$/;
    if (!regex.test(applicationNo)) {
      setError("Application number must start with 'EN' followed by 8 digits.");
      return false;
    }
    return true;
  };

  const validateFees = () => {
    const feeAmount = parseInt(fees, 10);

    if (scholarship === "yes") {
      if (feeAmount < 20000 || feeAmount > 90000) {
        setError("For EBC scholarship, fees must be between 20,000 and 90,000.");
        return false;
      }
    } else {
      if (category === "general" && (feeAmount < 20000 || feeAmount > 170000)) {
        setError("For General category, fees must be between 20,000 and 170,000.");
        return false;
      }
      if (category === "obc" && (feeAmount < 40000 || feeAmount > 70000)) {
        setError("For OBC category, fees must be between 40,000 and 70,000.");
        return false;
      }
      if (category === "sc/st" && (feeAmount < 20000 || feeAmount > 40000)) {
        setError("For SC/ST category, fees must be between 20,000 and 40,000.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateApplicationNo() && validateFees()) {
      alert("Form submitted successfully!");
      // Add further submission logic here
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-6 bg-white rounded-md max-w-md mx-auto mt-4 shadow-md">
        <h1 className="text-xl font-bold mb-4">Fees Section</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Application Number:</label>
            <input
              type="text"
              value={applicationNo}
              onChange={handleApplicationNoChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter application number (e.g., EN12345678)"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Scholarship:</label>
            <select
              value={scholarship}
              onChange={handleScholarshipChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Category:</label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full p-2 border rounded-md"
              disabled={scholarship === "yes"}
            >
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc/st">SC/ST</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Fees Amount:</label>
            <input
              type="number"
              value={fees}
              onChange={handleFeesChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter fees amount"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fees;
