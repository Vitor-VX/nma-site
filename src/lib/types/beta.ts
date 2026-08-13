export type BetaSignup = {
  name: string;
  email: string;
  source?: string;
  campaign?: string;
  medium?: string;
  content?: string;
  createdAt?: string;
};

export type BetaSignupState = 'idle' | 'loading' | 'success' | 'error';

export type BetaSignupResult = {
  ok: boolean;
  message?: string;
};
