import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function ApplicationDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [application, setApplication] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [company, setCompany] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {

    const fetchApplication = async () => {
      try {
        const response = await API.get(`/applications/${id}`);

        setApplication(response.data);

        setCompany(response.data.company);
        setJobRole(response.data.jobRole);
        setApplicationDate(response.data.applicationDate);
        setStatus(response.data.status);

      } catch (error) {
        console.error("Error fetching application:", error);
      }
    };

    fetchApplication();

  }, [id]);


  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await API.delete(`/applications/${id}`);

      alert("Application deleted successfully!");

      navigate("/applications");

    } catch (error) {

      console.error("Error deleting application:", error);

      alert("Failed to delete application");

    }
  };


  const handleUpdate = async (e) => {

    e.preventDefault();

    const updatedApplication = {
      company,
      jobRole,
      applicationDate,
      status
    };

    try {

      const response = await API.put(
        `/applications/${id}`,
        updatedApplication
      );

      setApplication(response.data);

      setIsEditing(false);

      alert("Application updated successfully!");

    } catch (error) {

      console.error("Error updating application:", error);

      alert("Failed to update application");

    }
  };


  if (!application) {
    return (
      <div className="applications-page">
        <h1>Loading...</h1>
      </div>
    );
  }


  return (
    <div className="applications-page">

      <div className="page-header">

        <div>
          <h1>Application Details</h1>
          <p>View and manage your job application.</p>
        </div>

        <Link to="/applications" className="add-button">
          Back to Applications
        </Link>

      </div>


      {!isEditing ? (

        <div className="application-form">

          <div className="form-group">
            <label>Company</label>
            <p>{application.company}</p>
          </div>

          <div className="form-group">
            <label>Job Role</label>
            <p>{application.jobRole}</p>
          </div>

          <div className="form-group">
            <label>Application Date</label>
            <p>{application.applicationDate}</p>
          </div>

          <div className="form-group">
            <label>Status</label>
            <p>{application.status}</p>
          </div>


          <button
            onClick={() => setIsEditing(true)}
            className="save-button"
          >
            Edit Application
          </button>


          <button
            onClick={handleDelete}
            className="delete-button"
          >
            Delete Application
          </button>

        </div>

      ) : (

        <form
          className="application-form"
          onSubmit={handleUpdate}
        >

          <div className="form-group">
            <label>Company</label>

            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>


          <div className="form-group">
            <label>Job Role</label>

            <input
              type="text"
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


          <button
            type="submit"
            className="save-button"
          >
            Save Changes
          </button>


          <button
            type="button"
            className="delete-button"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>

        </form>

      )}

    </div>
  );
}

export default ApplicationDetails;