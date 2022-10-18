import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getUser } from "./api";
import LoadingComponent from "./components/Loading";
import useAuth from "./config/hooks/useAuth";
import LogIn from "./pages/LogIn";

import "./App.css";
import "./style/generalCssStyle.css";

function PrivateRoute({ children }) {
  let [auth] = useAuth();

  return auth !== false ? children : <Navigate to="/" />;
}

export default function App() {
  let [auth, setAuth] = useAuth();

  // Check if user has an active session on the server
  useEffect(() => {
    getUser()
      .then(({ data }) => setAuth(data))
      .catch(() => setAuth(false));
  }, []);

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <main>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </main>
  );
}
