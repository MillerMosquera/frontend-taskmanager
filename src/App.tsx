import "./App.css";
import { Route, Routes } from "react-router-dom";
import Demo from "./pages/Demo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Task from "./pages/Task";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/Task" element={<Task />} />
      </Routes>
    </>
  );
}

export default App;
