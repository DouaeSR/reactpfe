import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Error from './pages/Error';
import PatientAppointments from './pages/Patients/Appointment';
import PatientProfile from './pages/Patients/Profile';
import PatientNewAppointment from './pages/Patients/NewApp';
import PatientSignUp from './pages/Patients/SignUp';
import LogIn from './pages/Patients/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <Header />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/patient/appointments" element={<PatientAppointments />}/>
              <Route path="/patient/profile" element={<PatientProfile />}/>
              <Route path="/patient/NewApp" element={<PatientNewAppointment />}/>
              <Route path="/patient/SignUp" element={<PatientSignUp/>}/>
              <Route path="/logIn" element={<LogIn />}/>
              <Route path="*" element={<Error />}/>
            </Routes>
        <Footer />
      </BrowserRouter>
    
   
  );
}

export default App;
