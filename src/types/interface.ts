export interface IAuthContext {
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  profile: any;
  setProfile: (profile: any) => void;
}
