import { Navigate, Outlet, useLocation } from "react-router";
import { useState, useEffect, use } from "react";
import userAuth$ from "../ObservablesFiles/UserAuthBehaviourSubject";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute() {

  
  const location = useLocation();
  const accessToken = sessionStorage.getItem('accessToken');



  if (!accessToken) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Outlet />;
}
