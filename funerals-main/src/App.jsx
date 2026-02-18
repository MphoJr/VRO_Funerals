import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import PlansPage from "./PlansPage";
import ContactPage from "./Contact";
import GetQuotePage from "./Getquote";
import LoginPage from "./Login";
import RegisterPage from "./Register";
import Gallery from "./Gallery";
import ProtectedRoute from "./components/ProtectedRoute";
import ClientDashboard from "./ClientDashboard";
import AdminDashboard from "./AdminDashboard";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Long landing page with multiple sections */}
        <Route path="/" element={<LandingPage />} />

        {/* Separate pages */}
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/gallery" element={<Gallery />} />

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/client-dashboard"
            element={
              <ProtectedRoute>
                <ClientDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Routes>
      <Footer />
    </>
  );
}
