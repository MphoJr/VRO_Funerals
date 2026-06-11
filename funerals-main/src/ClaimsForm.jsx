import React, { useState } from "react";

export default function ClaimsForm() {
  const [formData, setFormData] = useState({
    deceasedName: "",
    deceasedIdNumber: "",
    dateOfClaim: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to submit a claim.");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/clients/claims", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        setError(result.error || "Failed to submit claim");
        return;
      }

      setSuccess("Claim submitted successfully!");
      setFormData({
        deceasedName: "",
        deceasedIdNumber: "",
        dateOfClaim: "",
      });
    } catch (err) {
      console.error("Claim submission error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-red-700">Submit a Claim</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Name of Deceased</label>
          <input
            type="text"
            name="deceasedName"
            value={formData.deceasedName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Full name of deceased"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">ID Number of Deceased</label>
          <input
            type="text"
            name="deceasedIdNumber"
            value={formData.deceasedIdNumber}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. 8001015009087"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Claim Type</label>
          <input
            type="text"
            name="claimType"
            value={formData.claimType}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Funeral, Medical, etc."
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Provide details of the claim"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter claim amount"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Date of Claim</label>
          <input
            type="date"
            name="dateOfClaim"
            value={formData.dateOfClaim}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800"
        >
          Submit Claim
        </button>
      </form>
    </div>
  );
}
