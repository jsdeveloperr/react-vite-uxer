import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useSignInService } from '../../features/signin/hooks/useSignInService';
import { encodeBase64 } from './jwt/encodeBase64';

const parseJwt = (token: any) => {
  try {
    return JSON.parse(encodeBase64(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (): any => {
  const location = useLocation();
  const signinService = useSignInService();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      const encodedjwt = parseJwt(accessToken);

      if (encodedjwt.exp * 1000 < Date.now()) {
        localStorage.removeItem('access_token');
        signinService.handleLogout();
      }
    }
  }, [location, signinService]);
};

export default AuthVerify;
