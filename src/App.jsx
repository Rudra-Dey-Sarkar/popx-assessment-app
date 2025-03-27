import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Signup from "./components/Signup/Signup";
import { Toaster } from "react-hot-toast";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";


function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        {/* Landing page route */}
        <Route path="/" element={<Landing />} />
        {/* Signup page route */}
        <Route path="/signup" element={<Signup />} />
        {/* login page route */}
        <Route path="/login" element={<Login />} />
        {/* profile page route */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
