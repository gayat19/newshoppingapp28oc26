import { Navigate, Outlet } from "react-router";
import userAuth$ from "../ObservablesFiles/UserAuthBehaviourSubject";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Shop from "./Shop";

export default function ProtectedRoute() {
const [user, setUser] = useState();
const location = useLocation();
useEffect(() => {
  const subscription = userAuth$.subscribe(data => {
    setUser(data);
    console.log(data);
  });
  return () => subscription.unsubscribe();
}, []);
 
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Shop/>
  // if (user) {
  //   return <Navigate to="/login" replace  />;
  // }
  // return <Navigate to="/cart" replace />;
}