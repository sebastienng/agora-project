import { createGlobalState } from "react-hooks-global-state";

const { useGlobalState } = createGlobalState({
  auth: false,
});

export const useAuthState = () => useGlobalState("auth");
