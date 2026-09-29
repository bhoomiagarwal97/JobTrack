import { useState } from "react";
import API from "../services/api";

function AddApplication() {

  const [company, setCompany] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [status, setStatus] = useState("Applied");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const application = {
    company,
    jobRole,
    applicationDate,
    status
  };

  try {
    const response = await API.post("/applications", application);

    console.log("Application saved:", response.data);

    alert("Application added successfully!");

    setCompany("");
    setJobRole("");
    setApplicationDate("");
    setStatus("Applied");

  } catch (error) {
    console.error("Error saving application:", error);
    alert("Failed to save application");
  }
};


  return (
    <div className="add-application-page">

      <div className="page-header">
        <div>
          <h1>Add Application</h1>
          <p>Add a new job application to your tracker.</p>
        </div>
      </div>

      <form className="application-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Company</label>

          <input
            type="text"
            placeholder="e.g. Infosys"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Job Role</label>

          <input
            type="text"
            placeholder="e.g. Software Engineer"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Application Date</label>

          <input
            type="date"
            value={applicationDate}
            onChange={(e) => setApplicationDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
          </select>
        </div>

        <button type="submit" className="save-button">
          Save Application
        </button>

      </form>

    </div>
  );
}

export default AddApplication;