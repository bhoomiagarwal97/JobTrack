import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

  const [applications, setApplications] = useState([]);

  useEffect(() => {

    const fetchApplications = async () => {
      try {
        const response = await API.get("/applications");
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();

  }, []);

  const totalApplications = applications.length;

  const appliedCount = applications.filter(
    (application) => application.status === "Applied"
  ).length;

  const interviewCount = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  const offerCount = applications.filter(
    (application) => application.status === "Offer"
  ).length;

  return (
    <div className="dashboard">

      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Track and manage your job applications.</p>
        </div>
      </div>


      {/* Statistics */}
      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Applications</h3>
          <p>{totalApplications}</p>
        </div>

        <div className="stat-card">
          <h3>Applied</h3>
          <p>{appliedCount}</p>
        </div>

        <div className="stat-card">
          <h3>Interviews</h3>
          <p>{interviewCount}</p>
        </div>

        <div className="stat-card">
          <h3>Offers</h3>
          <p>{offerCount}</p>
        </div>

      </div>


      {/* Recent Applications */}
      <div className="recent-section">

        <h2>Recent Applications</h2>

        {applications.length === 0 ? (

          <p className="empty-message">
            No applications added yet.
          </p>

        ) : (

          <div className="recent-applications-list">

            {applications
              .slice(-5)
              .reverse()
              .map((application) => (

                <div
                  className="recent-application-card"
                  key={application.id}
                >

                  <div className="recent-application-info">

                    <h3>{application.company}</h3>

                    <p>{application.jobRole}</p>

                  </div>


                  <div className="recent-application-details">

                    <span>
                      {application.applicationDate}
                    </span>

                    <span className="status-badge">
                      {application.status}
                    </span>

                  </div>

                </div>

              ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Dashboard;