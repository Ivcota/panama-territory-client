import React, { useEffect } from "react";
import { useAuthStore } from "../Auth/authStore";

const Dashboard = () => {
  const { username, restoreAuth } = useAuthStore();

  useEffect(() => {
    restoreAuth();
  }, []);

  return (
    <div>
      <h1>Welcome {username} to your dashboard.</h1>
    </div>
  );
};

export default Dashboard;
