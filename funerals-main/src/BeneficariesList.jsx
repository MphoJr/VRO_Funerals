import React, { useEffect, useState } from "react";

export default function BeneficiariesList() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    relation: "",
    idNumber: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch("http://localhost:4000/clients/members", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await res.json();
        if (!res.ok) {
          setError(result.error || "Failed to fetch beneficiaries");
          return;
        }
        setMembers(result);
      } catch (err) {
        console.error("Error fetching beneficiaries:", err);
        setError("Server error");
      }
    };
    fetchMembers();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/clients/members/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        alert("Failed to delete beneficiary");
        return;
      }
      setMembers(members.filter((m) => m.id !== id));
    } catch (err) {
      console.error("Error deleting beneficiary:", err);
    }
  };

  const openEdit = (member) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      surname: member.surname,
      relation: member.relation,
      idNumber: member.idNumber,
    });
  };

  const handleEditChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const saveEdit = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/clients/members/${editingMember.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        },
      );
      const result = await res.json();
      if (!res.ok) {
        alert(result.error || "Failed to update beneficiary");
        return;
      }
      setMembers(
        members.map((m) => (m.id === editingMember.id ? result.member : m)),
      );
      setEditingMember(null);
    } catch (err) {
      console.error("Error updating beneficiary:", err);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-red-700">My Beneficiaries</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-3 py-2">Name</th>
            <th className="border px-3 py-2">Surname</th>
            <th className="border px-3 py-2">Relation</th>
            <th className="border px-3 py-2">ID Number</th>
            <th className="border px-3 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id}>
              <td className="border px-3 py-2">{m.name}</td>
              <td className="border px-3 py-2">{m.surname}</td>
              <td className="border px-3 py-2">{m.relation}</td>
              <td className="border px-3 py-2">{m.idNumber}</td>
              <td className="border px-3 py-2">
                <button
                  onClick={() => openEdit(m)}
                  className="bg-blue-600 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(m.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editingMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Edit Beneficiary</h3>

            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleEditChange("name", e.target.value)}
              className="w-full border px-3 py-2 rounded mb-2"
              required
            />

            <label className="block mb-1">Surname</label>
            <input
              type="text"
              value={formData.surname}
              onChange={(e) => handleEditChange("surname", e.target.value)}
              className="w-full border px-3 py-2 rounded mb-2"
              required
            />

            <label className="block mb-1">Relation</label>
            <input
              type="text"
              value={formData.relation}
              onChange={(e) => handleEditChange("relation", e.target.value)}
              className="w-full border px-3 py-2 rounded mb-2"
              required
            />

            <label className="block mb-1">ID Number</label>
            <input
              type="text"
              value={formData.idNumber}
              onChange={(e) => handleEditChange("idNumber", e.target.value)}
              className="w-full border px-3 py-2 rounded mb-2"
              required
            />
            {/* Inline validation message */}
            {formData.idNumber && !/^\d{13}$/.test(formData.idNumber) && (
              <p className="text-red-600 text-sm mb-2">
                ID number must be exactly 13 digits.
              </p>
            )}

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setEditingMember(null)}
                className="bg-gray-500 text-white px-3 py-1 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                disabled={
                  !formData.name ||
                  !formData.surname ||
                  !formData.relation ||
                  !/^\d{13}$/.test(formData.idNumber)
                }
                className={`px-3 py-1 rounded ${
                  /^\d{13}$/.test(formData.idNumber)
                    ? "bg-green-600 text-white"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
