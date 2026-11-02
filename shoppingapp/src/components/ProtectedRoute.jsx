import { Navigate, Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";
import userAuth$ from "../ObservablesFiles/UserAuthBehaviourSubject";

export default function ProtectedRoute() {

  const [user, setUser] = useState(userAuth$.getValue());
  const location = useLocation();

  useEffect(() => {
    const subscription = userAuth$.subscribe(setUser);
    return () => subscription.unsubscribe();
  }, []);

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Outlet />;
}
