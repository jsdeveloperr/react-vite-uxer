import { Env } from '../../../config/Env';
import makeApi from '../../../libs/core/configureAxios';
import { SignInFormInput } from '../types';

const api = makeApi(`${Env.API_BASE_URL}`);

const SIGNIN_BASE_URL = 'https://dummyjson.com/auth/login';

export const createSignin = (
  signin: SignInFormInput
): Promise<SignInFormInput> =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  api.post(SIGNIN_BASE_URL, signin).then((response: any) => {
    if (response.token) {
      localStorage.setItem('access_token', response.token);
      localStorage.setItem('access_id', response.id);
    }

    return response;
  });

export const logout = () => {
  localStorage.removeItem('access_token');
};

export const getCurrentUser = () => {
  return localStorage.getItem('access_token');
};
