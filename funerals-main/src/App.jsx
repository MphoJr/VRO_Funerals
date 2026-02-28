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
import ProtectedRoute from "./components/ProjectedRoutes"; // ✅ check spelling here
import ClientDashboard from "./ClientDashboard";
import AdminDashboard from "./AdminDashboard";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Protected routes */}
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
      <Footer />
    </>
  );
}
