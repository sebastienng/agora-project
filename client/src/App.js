import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { getUser } from "./api";
import useAuth from "./config/hooks/useAuth";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";

import "./App.css";
import "./style/generalCssStyle.css";

function PrivateRoute({ children }) {
  let [auth] = useAuth();

  return auth !== false ? children : <Navigate to="/" />;
}

export default function App() {
  let [, setAuth] = useAuth();

  // Check if user has an active session on the server
  useEffect(() => {
    getUser()
      .then(({ data }) => setAuth(data))
      .catch(() => setAuth(false));
  }, []);

  // if (isLoading) {
  //   return <LoadingComponent />;
  // }
  return (
    <main>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </div>
    </main>
  );
}
