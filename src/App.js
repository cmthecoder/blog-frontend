import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Layout from "./Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import PostPage from "./PostPage";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </>
    
  )
}

export default App
