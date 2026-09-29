
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Applications() {

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date");


  useEffect(() => {

    const fetchApplications = async () => {

      try {

        setLoading(true);
        setError("");

        const response = await API.get("/applications");

        console.log("API RESPONSE:", response.data);

        setApplications(response.data);

      } catch (error) {

        console.error("API ERROR:", error);

        setError("Failed to load applications.");

      } finally {

        setLoading(false);

      }

    };

    fetchApplications();

  }, []);


  const filteredApplications = applications
    .filter((application) => {

      const matchesSearch =
        application.company
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        application.jobRole
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        application.status === statusFilter;

      return matchesSearch && matchesStatus;

    })
    .sort((a, b) => {

      if (sortBy === "date") {
        return (
          new Date(b.applicationDate) -
          new Date(a.applicationDate)
        );
      }

      if (sortBy === "company") {
        return a.company.localeCompare(b.company);
      }

      if (sortBy === "status") {
        return a.status.localeCompare(b.status);
      }

      return 0;

    });


  const handleRetry = () => {
    window.location.reload();
  };


  return (
    <div className="applications-page">

      <div className="page-header">

        <div>
          <h1>My Applications</h1>

          <p>
            Manage all your job applications in one place.
          </p>
        </div>

        <Link
          to="/add-application"
          className="add-button"
        >
          + Add Application
        </Link>

      </div>


      {loading ? (

        <div className="empty-applications">
          <p>Loading applications...</p>
        </div>

      ) : error ? (

        <div className="empty-applications">

          <p>{error}</p>

          <button
            onClick={handleRetry}
            className="save-button"
          >
            Try Again
          </button>

        </div>

      ) : (

        <>

          {/* SEARCH / FILTER / SORT */}

          <div className="search-box">

            <input
              type="text"
              placeholder="Search by company or job role..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />


            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
            >

              <option value="All">
                All Status
              </option>

              <option value="Applied">
                Applied
              </option>

              <option value="Interview">
                Interview
              </option>

              <option value="Rejected">
                Rejected
              </option>

              <option value="Offer">
                Offer
              </option>

            </select>


            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
            >

              <option value="date">
                Sort by Date
              </option>

              <option value="company">
                Sort by Company
              </option>

              <option value="status">
                Sort by Status
              </option>

            </select>

          </div>


          {/* APPLICATION TABLE */}

          <div className="applications-table">

            <div className="table-header">

              <span>Company</span>

              <span>Job Role</span>

              <span>Application Date</span>

              <span>Status</span>

            </div>


            {applications.length === 0 ? (

              <div className="empty-applications">

                <p>No applications found.</p>

                <span>
                  Add your first job application
                  to get started.
                </span>

              </div>

            ) : filteredApplications.length === 0 ? (

              <div className="empty-applications">

                <p>
                  No matching applications found.
                </p>

                <span>
                  Try changing your search or
                  status filter.
                </span>

              </div>

            ) : (

              filteredApplications.map((application) => (

                <Link
                  to={`/applications/${application.id}`}
                  className="application-row"
                  key={application.id}
                >

                  <span>
                    {application.company}
                  </span>

                  <span>
                    {application.jobRole}
                  </span>

                  <span>
                    {application.applicationDate}
                  </span>

                  <span
                    className={`status-badge status-${application.status.toLowerCase()}`}
                  >
                    {application.status}
                  </span>

                </Link>

              ))

            )}

          </div>

        </>

      )}

    </div>
  );
}

export default Applications;

