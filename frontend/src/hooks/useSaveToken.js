import { useEffect } from 'react';

const useSaveToken = (token) => {
  useEffect(() => {
    localStorage.setItem('TOKEN', token);
  }, [token]);
};

export default useSaveToken;
