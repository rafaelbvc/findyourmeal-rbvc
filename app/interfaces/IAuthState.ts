import { State } from "./IState";

export interface IAuthState extends State {
    setAuthState: React.Dispatch<React.SetStateAction<State>>;
  }