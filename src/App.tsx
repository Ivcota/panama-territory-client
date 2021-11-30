import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import { server } from "./Helpers/serverInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
