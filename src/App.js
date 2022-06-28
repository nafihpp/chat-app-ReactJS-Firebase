import "./App.css";
import Login from "./components/screens/Login";
import Register from "./components/screens/Signup";
import Home from "./components/screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/includes/PrivateRoute";
import Authprovider from "./components/context/AuthContext";
import Profile from "./components/screens/Profile";
function App() {
    return (
        <Authprovider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<PrivateRoute />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </Authprovider>
    );
}

export default App;
