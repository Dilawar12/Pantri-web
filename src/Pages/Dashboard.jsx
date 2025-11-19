import React, { useEffect, useState } from "react";
import logo from "../../public/assets/images/logo.png";
import ActivityOverview from "../Components/Dashboard/ActivityOverview";


// Dummy Data
const dashboardData = {
  bookingsCount: 12,
  earningsCount: 45000,
  rating: 4.8,
  activeCustomers: 7,
  completionRate: 92,
  responseTime: "4 min",
  earningsGrowth: "+12%",
  customerRetention: "86%",
};

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    setDashboard(dashboardData);
  }, []);

  if (!dashboard) return <h3>Loading...</h3>;

  return (
    <div className="dashboard-main-page p-4" style={{ background: "#f8f9fa" }}>
      <div className="container-fluid">

        {/* Header */}
        <div className="d-flex align-items-center mb-4">
          <img src={logo} alt="logo" style={{ width: 60 }} />
          <h3 className="ms-3">Real-Time Analytics</h3>
        </div>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          {[
            { title: "Bookings", value: dashboard.bookingsCount },
            { title: "Earnings", value: "$" + dashboard.earningsCount },
            { title: "Rating", value: dashboard.rating + " ⭐" },
            { title: "Active Customers", value: dashboard.activeCustomers },
          ].map((item, i) => (
            <div className="col-md-3" key={i}>
              <div className="card shadow-sm p-3 text-center" style={{ borderRadius: 12 }}>
                <h6>{item.title}</h6>
                <h2 className="fw-bold">{item.value}</h2>
              </div>
            </div>
          ))}
        </div>

       <ActivityOverview/>

        {/* Performance Metrics */}
        <div className="row g-3">
          {[
            { title: "Completion Rate", value: dashboard.completionRate + "%" },
            { title: "Avg Response Time", value: dashboard.responseTime },
            { title: "Earnings Growth", value: dashboard.earningsGrowth },
            { title: "Customer Retention", value: dashboard.customerRetention },
          ].map((m, i) => (
            <div className="col-md-3" key={i}>
              <div className="card p-3 shadow-sm text-center" style={{ borderRadius: 12 }}>
                <h6>{m.title}</h6>
                <h3 className="fw-bold">{m.value}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
