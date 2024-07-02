import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar'; // Import SideBar component
import Home from './page/Home';
import Laporan from './page/Laporan';
import About from './page/About';
import Admin from './dashboard/Admin';
import Footer from './components/Footer';
import EditLaporan from './dashboard/EditLaporan';
import ProtectedRoute from './components/ProtectedRoute';
import { LoginProvider } from './context/LoginContext';
import Login from './dashboard/Login';

function App() {
  return (
    <Router>
      <LoginProvider>
        {/* Header will be displayed for all routes except /admin */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laporan" element={<Laporan />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editlaporan/:id" element={<ProtectedRoute><EditLaporan /></ProtectedRoute>} />

          {/* Use SideBar for /admin route */}
          <Route path="/admin/*" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </LoginProvider>
    </Router>
  );
}

// Define a separate component for Admin route with SideBar
const AdminLayout = () => (
  <React.Fragment>
    <SideBar />
    <Routes>
      <Route path="/" element={<Admin />} />
    </Routes>
  </React.Fragment>
);

export default App;
