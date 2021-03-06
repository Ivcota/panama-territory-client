import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthStore } from "./Auth/authStore";

import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Landing from "./Components/Landing";
import PrivateRoute from "./Components/PrivateRoute";
import SignInPage from "./Components/SignInPage";
import TerritoryPage from "./Components/TerritoryPage";

const App = () => {
  const { restoreAuth } = useAuthStore();

  useEffect(() => {
    restoreAuth();
    // eslint-disable-next-line
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/territory/:id" element={<PrivateRoute />}>
          <Route path="/territory/:id" element={<TerritoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
