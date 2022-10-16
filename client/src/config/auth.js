import { createGlobalState } from "react-hooks-global-state";
import { getUser } from "../api";

const { useGlobalState } = createGlobalState({
  auth: getUser(),
});

export const useAuthState = () => useGlobalState("auth");
