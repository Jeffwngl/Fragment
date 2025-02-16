// handles page routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import About from "../pages/about/about";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />} />
                <Route
                    path='/dashboard'
                    element={
                        <Dashboard />
                    }
                />
            </Routes>
        </Router>
    )
}

export default AppRoutes