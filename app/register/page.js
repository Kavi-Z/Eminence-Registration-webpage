"use client";

import { useState } from "react";

export default function TeamRegister() {
  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    members: ["", "", ""]
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMemberChange = (index, value) => {
    const newMembers = [...formData.members];
    newMembers[index] = value;
    setFormData({ ...formData, members: newMembers });
  };

  const addMember = () => {
    if (formData.members.length < 10) {
      setFormData({ ...formData, members: [...formData.members, ""] });
    }
  };

  const removeMember = (index) => {
    if (formData.members.length > 1) {
      const newMembers = formData.members.filter((_, i) => i !== index);
      setFormData({ ...formData, members: newMembers });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    setIsSubmitting(true);

    const filteredMembers = formData.members.filter((member) => member.trim() !== "");
    const submissionData = { ...formData, members: filteredMembers };

    try {
      const res = await fetch(" ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await res.json();

      if (result.result === "Success") {
        setStatus("Team registered successfully!");
        setFormData({
          teamName: "",
          leaderName: "",
          leaderEmail: "",
          leaderPhone: "",
          members: ["", "", ""],
        });
      } else {
        setStatus("Registration failed. Please try again.");
      }
    } catch {
      setStatus("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <div className="header">
          <h1>Team Registration</h1>
          <p>Register your team for the competition</p>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Team Name *</label>
            <input
              name="teamName"
              placeholder="Enter your team name"
              required
              value={formData.teamName}
              onChange={handleChange}
            />
          </div>

          <div className="form-section purple">
            <h3>Team Leader Information</h3>

            <div className="form-group">
              <label>Leader Name *</label>
              <input
                name="leaderName"
                placeholder="Team leader's full name"
                required
                value={formData.leaderName}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <div className="form-group">
                <label>Email *</label>
                <input
                  name="leaderEmail"
                  type="email"
                  placeholder="leader@example.com"
                  required
                  value={formData.leaderEmail}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label>Phone *</label>
                <input
                  name="leaderPhone"
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={formData.leaderPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-section indigo">
            <div className="row space-between">
              <h3>Team Members</h3>
              <button type="button" onClick={addMember} disabled={formData.members.length >= 3}>
                Add Member
              </button>
            </div>

            {formData.members.map((member, index) => (
              <div key={index} className="row member-row">
                <input
                  placeholder={`Member ${index + 1} name`}
                  value={member}
                  onChange={(e) => handleMemberChange(index, e.target.value)}
                />
                {formData.members.length > 1 && (
                  <button type="button" className="remove" onClick={() => removeMember(index)}>
                    Remove
                  </button>
                )}
              </div>
            ))}
            <p className="note"> You can add up to 4 members total.</p>
          </div>

          <button type="submit" disabled={isSubmitting} className="submit">
            {isSubmitting ? "Registering Team..." : "Register Team"}
          </button>

          {status && <div className="status">{status}</div>}
        </form>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #7c3aed, #4f46e5);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          font-family: 'Inter', sans-serif;
        }

        .card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 40px;
          max-width: 700px;
          width: 100%;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .header h1 {
          font-size: 36px;
          color: #4c1d95;
          margin-bottom: 10px;
        }

        .header p {
          font-size: 16px;
          color: #4b5563;
        }

        .form-group {
          margin-bottom: 20px;
          
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #374151;
        }

        .form-group input {
          width: 100%;
          padding: 14px;
          font-size: 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .form-group input:focus {
          border-color: #7c3aed;
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
          outline: none;
          transform: translateY(-2px);
        }

        .form-section {
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
          border: 1px solid #ddd6fe;
        }

        .form-section h3 {
          margin-bottom: 16px;
          font-size: 20px;
          font-weight: bold;
        }

        .form-section.purple {
          background: #f5f3ff;
        }

        .form-section.indigo {
          background: #eef2ff;
        }

        .row {
          display: flex;
          gap: 20px;
        }

        .space-between {
          justify-content: space-between;
          align-items: center;
        }

        .member-row {
          margin-bottom: 10px;
        }

        .member-row input {
          flex: 1;
        }

        .remove {
          background-color: #ef4444;
          border: none;
          color: white;
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
        }

        .remove:hover {
          background-color: #dc2626;
        }

        .form-section button {
          padding: 10px 16px;
          background-color: #4f46e5;
          color: white;
          font-size: 14px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .form-section button:hover {
          background-color: #4338ca;
        }

        .form-section button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .submit {
          width: 100%;
          padding: 18px;
          font-size: 18px;
          font-weight: bold;
          background: linear-gradient(to right, #7c3aed, #6366f1);
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.4);
        }

        .submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .status {
          margin-top: 24px;
          padding: 16px;
          text-align: center;
          font-weight: 600;
          border-radius: 12px;
          background-color: #f3e8ff;
          color: #6b21a8;
          border: 1px solid #e9d5ff;
        }

        .note {
          margin-top: 8px;
          font-size: 14px;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}
