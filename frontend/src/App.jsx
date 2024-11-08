import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import User from "./pages/User";
import Dashbord from "./pages/Dashbord";
import Docks from "./pages/Docks";
import Register from "./pages/Register";
import Loign from "./pages/Loign";
import Footer from "./pages/Footer";
import Errorpage from "./pages/Errorpage";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-[100vh] w-full p-6 overflow-hidden flex items-center justify-center gap-2 flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/dock" element={<Docks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Loign />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
