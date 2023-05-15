import { User } from "./interfaceUser";

export interface State {
    loading: boolean;
    data: User | null;
    error: string | null;
  }