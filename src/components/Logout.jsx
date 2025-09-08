import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [_, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      setAuthUser(null); // Context se logout
      localStorage.removeItem("Users"); // LocalStorage clear
      toast.success("Logout successfully");
      navigate("/", { replace: true }); // Home page par redirect
    } catch (error) {
      toast.error("Error: " + error);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;