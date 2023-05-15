import { State } from "./interfaceState";

export interface AuthState extends State {
    setAuthState: React.Dispatch<React.SetStateAction<State>>;
  }