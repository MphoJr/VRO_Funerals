import React, { useState } from "react";

export default function AddBeneficiariesForm() {
  const [members, setMembers] = useState([
    { name: "", surname: "", relation: "", idNumber: "" },
  ]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  const addMember = () => {
    if (members.length >= 13) {
      setError("You can only add up to 13 beneficiaries.");
      return;
    }
    setError("");
    setMembers([
      ...members,
      { name: "", surname: "", relation: "", idNumber: "" },
    ]);
  };

  const removeMember = (index) => {
    const updated = members.filter((_, i) => i !== index);
    setMembers(updated);
  };

  const validateMembers = () => {
    for (let m of members) {
      if (!m.name || !m.surname || !m.relation || !m.idNumber) {
        return "All fields are required.";
      }
      if (!/^\d{13}$/.test(m.idNumber)) {
        return "Each ID number must be exactly 13 digits.";
      }
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateMembers();
    if (validationError) {
      setError(validationError);
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to add beneficiaries.");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/clients/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ members }),
      });

      const result = await res.json();
      if (!res.ok) {
        setError(result.error || "Failed to save beneficiaries");
        return;
      }

      setSuccess("Beneficiaries saved successfully!");
      setMembers([{ name: "", surname: "", relation: "", idNumber: "" }]);
    } catch (err) {
      console.error("Error saving beneficiaries:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-red-700">Add Beneficiaries</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <form onSubmit={handleSubmit}>
        {members.map((m, index) => (
          <div key={index} className="mb-4 border p-3 rounded">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={m.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className="w-full border px-3 py-2 rounded mb-2"
              required
            />

            <label className="block mb-1">Surname</label>
            <input
              type="text"
              value={m.surname}
              onChange={(e) => handleChange(index, "surname", e.target.value)}
              className="w-full border px-3 py-2 rounded mb-2"
              required
            />

            <label className="block mb-1">Relationship to Main Member</label>
            <input
              type="text"
              value={m.relation}
              onChange={(e) => handleChange(index, "relation", e.target.value)}
              className="w-full border px-3 py-2 rounded mb-2"
              required
            />

            <label className="block mb-1">ID Number</label>
            <input
              type="text"
              value={m.idNumber}
              onChange={(e) => handleChange(index, "idNumber", e.target.value)}
              className="w-full border px-3 py-2 rounded mb-2"
              required
            />
            {m.idNumber && !/^\d{13}$/.test(m.idNumber) && (
              <p className="text-red-600 text-sm mb-2">
                ID number must be exactly 13 digits.
              </p>
            )}

            {members.length > 1 && (
              <button
                type="button"
                onClick={() => removeMember(index)}
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addMember}
          className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
        >
          Add Another Beneficiary
        </button>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save Beneficiaries
        </button>
      </form>
    </div>
  );
}
