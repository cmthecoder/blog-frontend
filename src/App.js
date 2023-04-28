import { Route, Routes } from "react-router-dom";
import "./App.css";
import Post from "./Post";
import Header from "./Header";
import Login from "./pages/Login";
import Layout from "./Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
