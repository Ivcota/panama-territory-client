import { useAuthStore } from "../Auth/authStore";

const Dashboard = () => {
  const { username, logout } = useAuthStore();

  return (
    <div>
      <h1>Welcome {username} to your dashboard.</h1>
      <button onClick={() => logout()}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
