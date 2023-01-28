import "./App.css";
import TopBar from "./components/topabr/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import SInglePage from "./pages/single/SInglePage";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const userLoggin = false;
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {
            <Route
              path="/register"
              element={userLoggin ? <Home /> : <Register />}
            />
          }
          <Route path="/login" element={userLoggin ? <Home /> : <Login />} />
          <Route
            path="/Settings"
            element={userLoggin ? <Settings /> : <Register />}
          />
          <Route
            path="/Write"
            element={userLoggin ? <Write /> : <Register />}
          />
          <Route path="/post/:postId" element={<SInglePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
