import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
