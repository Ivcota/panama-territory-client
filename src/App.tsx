import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import SignInPage from "./Components/SignInPage";
import Landing from "./Components/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
