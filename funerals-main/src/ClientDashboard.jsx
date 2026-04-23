import React, { useState, useEffect } from "react";

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("claims");
  const [claims, setClaims] = useState([]);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [profile, setProfile] = useState({});
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  // Fetch data depending on tab
  const fetchData = async (endpoint, setter) => {
    try {
      const res = await fetch(`http://localhost:4000/${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await res.json();
      if (res.ok) {
        setter(result);
        setError("");
      } else {
        setError(result.error || "Failed to fetch data");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

  useEffect(() => {
    if (activeTab === "claims") fetchData("client/claims", setClaims);
    if (activeTab === "beneficiaries")
      fetchData("client/beneficiaries", setBeneficiaries);
    if (activeTab === "profile") fetchData("client/profile", setProfile);
  }, [activeTab]);

  // Add new claim
  const handleAddClaim = async (description) => {
    try {
      const res = await fetch("http://localhost:4000/client/claims", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ description }),
      });
      const result = await res.json();
      if (res.ok) {
        setClaims([...claims, result]);
      } else {
        alert(result.error || "Failed to add claim");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  // Manage beneficiaries
  const handleAddBeneficiary = async (name, relation) => {
    if (beneficiaries.length >= 13) {
      alert("You can only have up to 13 beneficiaries.");
      return;
    }
    try {
      const res = await fetch("http://localhost:4000/client/beneficiaries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, relation }),
      });
      const result = await res.json();
      if (res.ok) {
        setBeneficiaries([...beneficiaries, result]);
      } else {
        alert(result.error || "Failed to add beneficiary");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  const handleEditBeneficiary = async (id, newName) => {
    try {
      const res = await fetch(
        `http://localhost:4000/client/beneficiaries/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name: newName }),
        },
      );
      const result = await res.json();
      if (res.ok) {
        setBeneficiaries(beneficiaries.map((b) => (b.id === id ? result : b)));
      } else {
        alert(result.error || "Failed to update beneficiary");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  const handleDeleteBeneficiary = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:4000/client/beneficiaries/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (res.ok) {
        setBeneficiaries(beneficiaries.filter((b) => b.id !== id));
      } else {
        const result = await res.json();
        alert(result.error || "Failed to delete beneficiary");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  // Update profile
  const handleUpdateProfile = async (updatedProfile) => {
    try {
      const res = await fetch("http://localhost:4000/client/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProfile),
      });
      const result = await res.json();
      if (res.ok) {
        setProfile(result);
        alert("Profile updated successfully");
      } else {
        alert(result.error || "Failed to update profile");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Client Dashboard</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab("claims")}
          className={`px-4 py-2 rounded-md ${activeTab === "claims" ? "bg-red-700 text-white" : "bg-gray-200"}`}
        >
          My Claims
        </button>
        <button
          onClick={() => setActiveTab("beneficiaries")}
          className={`px-4 py-2 rounded-md ${activeTab === "beneficiaries" ? "bg-red-700 text-white" : "bg-gray-200"}`}
        >
          Beneficiaries
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`px-4 py-2 rounded-md ${activeTab === "profile" ? "bg-red-700 text-white" : "bg-gray-200"}`}
        >
          Profile
        </button>
      </div>

      {/* Content */}
      <div className="bg-white shadow-md rounded-lg p-4">
        {error && <p className="text-red-600 mb-4">{error}</p>}

        {activeTab === "claims" && (
          <>
            <h2 className="text-xl font-bold mb-4">My Claims</h2>
            <button
              onClick={() => handleAddClaim(prompt("Enter claim description:"))}
              className="bg-green-600 text-white px-4 py-2 rounded mb-4"
            >
              Add Claim
            </button>
            <ul>
              {claims.map((c) => (
                <li key={c.id} className="border-b p-2">
                  {c.description} — {c.status}
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === "beneficiaries" && (
          <>
            <h2 className="text-xl font-bold mb-4">My Beneficiaries</h2>
            <button
              onClick={() =>
                handleAddBeneficiary(prompt("Name:"), prompt("Relation:"))
              }
              className="bg-green-600 text-white px-4 py-2 rounded mb-4"
            >
              Add Beneficiary
            </button>
            <ul>
              {beneficiaries.map((b) => (
                <li key={b.id} className="border-b p-2 flex justify-between">
                  <span>
                    {b.name} ({b.relation})
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        handleEditBeneficiary(b.id, prompt("New name:"))
                      }
                      className="bg-blue-600 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBeneficiary(b.id)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === "profile" && (
          <>
            <h2 className="text-xl font-bold mb-4">My Profile</h2>
            <p>
              <strong>Name:</strong> {profile.name}
            </p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <button
              onClick={() =>
                handleUpdateProfile({
                  name: prompt("New name:", profile.name),
                  email: prompt("New email:", profile.email),
                })
              }
              className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
              Update Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}
