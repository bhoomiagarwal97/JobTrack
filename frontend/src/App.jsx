import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import AddApplication from "./pages/AddApplication";
import ApplicationDetails from "./pages/ApplicationDetails";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/applications" element={<Applications />} />

        <Route path="/add-application" element={<AddApplication />} />

        <Route
          path="/applications/:id"
          element={<ApplicationDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;