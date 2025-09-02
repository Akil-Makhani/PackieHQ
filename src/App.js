import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Onboarding from "./pages/onboarding";
import Login from "./pages/login";
import Home from "./components/home";
import Header from "./components/header";
import Footer from "./components/footer";

NProgress.configure({
  minimum: 0.6,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

function NavigationProgress() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 100);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/onboarding' || location.pathname === '/forgot_password' || location.pathname === '/signup';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <NavigationProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot_password" element={<Login />} />
        <Route path="/signup" element={<Login />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <>
      <Toaster position='top-center' />
      <Router>
        <AppContent />
      </Router>
    </>
  );
}
