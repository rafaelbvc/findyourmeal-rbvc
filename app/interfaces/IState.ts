import { IUser } from "./IUser";

export interface State {
    loading: boolean;
    data: IUser | null;
    error: string | null;
  }