import { useAuthState } from "../auth";

export default function useAuth() {
  const [auth, setAuth] = useAuthState();

  const setUser = (user) => {
    if (!user) {
      setAuth(false);
    } else {
      setAuth(user);
    }
  };

  return [auth, setUser];
}
