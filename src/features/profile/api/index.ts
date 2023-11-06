import { Env } from '../../../config/Env';
import makeApi from '../../../libs/core/configureAxios';
import { Profile } from '../types';

const api = makeApi(`${Env.API_BASE_URL}`);
const id = localStorage.getItem('access_id');

const PROFILE_URL = `https://dummyjson.com/users/${id}`;

export const getProfile = (): Promise<Profile> =>
  api.get(PROFILE_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
