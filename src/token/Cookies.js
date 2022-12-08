import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set('auth', refreshToken, {
    sameSite: 'strict',
    path: "/",
    expires: new Date(expireDate)
  });
};

export const getCookieToken = () => {
  return cookies.get('auth');
};

export const removeCookieToken = () => {
  return cookies.remove('auth', { sameSite: 'strict', path: "/" })
}