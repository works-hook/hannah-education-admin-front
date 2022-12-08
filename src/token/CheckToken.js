import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCookieToken } from "./Cookies";
import { DELETE_TOKEN } from "./Auth";

export function CheckToken(key) {
  const [isAuth, setIsAuth] = useState('Loaded');
  const refreshToken = getCookieToken();
  const dispatch = useDispatch();

  useEffect(()=> {
    const checkAuthToken = () => {
      if (refreshToken === undefined) {
        dispatch(DELETE_TOKEN());
        setIsAuth('Failed');
      } else {
          setIsAuth('Success');
      }
    };
    checkAuthToken();
  }, [refreshToken, dispatch, key]);

  return {
    isAuth
  };
}