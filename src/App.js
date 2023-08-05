import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/doctor/home/dashboard";
import Appointments from "./pages/doctor/home/appointment";
import Schedules from "./pages/doctor/home/schedules";
import Profile from "./pages/doctor/home/profile";
import Transaction from "./pages/doctor/home/transactions";
import PatientLogin from "./pages/patientLogin";
import DoctorLogin from "./pages/doctorLogin";
import LoginIntermediate from "./pages/loginintermediate";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/loginInter" element={<LoginIntermediate/>} exact />
        <Route path="/patientlogin" element={<PatientLogin/>} exact />
        <Route path="/doctorlogin" element={<DoctorLogin/>} exact />
        <Route path="/dashboard" element={<Dashboard />} exact />
        <Route path="/Appointments" element={<Appointments />} exact />
        <Route path="/Schedules" element={<Schedules />} exact />
        <Route path="/Profile" element={< Profile />} exact />
        <Route path="/transactions" element={< Transaction />} exact />
      </Routes>
    </div>
  );
}

export default App;
