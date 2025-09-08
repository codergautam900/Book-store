import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import AuthProvider, { useAuth } from "./context/AuthProvider";

function AppRoutes() {
  const [authUser] = useAuth();
  console.log(authUser);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/course"
        element={authUser ? <Courses /> : <Navigate to="/signup" />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <div className="dark:bg-slate-900 dark:text-white">
        <Router>
          <AppRoutes />
        </Router>
        <Toaster />
      </div>
    </AuthProvider>
  );
}

export default App;