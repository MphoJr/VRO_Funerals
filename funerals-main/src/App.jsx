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
import ProtectedRoute from "./components/ProtectedRoutes"; // ✅ check spelling here
import ClientDashboard from "./ClientDashboard";
import AdminDashboard from "./AdminDashboard";
import ClaimsForm from "./ClaimsForm"; // ✅ new form component
import AddBeneficiariesForm from "./AddBeneficiary"; // ✅ new form component

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
        <Route path="/claims/new" element={<ClaimsForm />} />{" "}
        <Route path="/beneficiaries/new" element={<AddBeneficiariesForm />} />
        {/* 👈 form route */}
        {/* Protected routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client/dashboard"
          element={
            <ProtectedRoute requiredRole="client">
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
