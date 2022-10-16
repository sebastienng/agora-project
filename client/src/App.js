import { Routes } from "react-router-dom";
import "./App.css";
import LoadingComponent from "./components/Loading";
import useAuth from "./config/hooks/useAuth";
import LogIn from "./pages/LogIn";

function PrivateRoute({ children }) {
  let [auth] = useAuth();

  return auth !== false ? children : <Navigate to="/" />;
}

export default function App() {
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
