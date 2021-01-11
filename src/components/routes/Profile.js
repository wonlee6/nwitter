import { authService } from 'fbase';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  const onLogoutClick = () => {
    authService.signOut();
    history.push('/');
  };
  return (
    <>
      <button onClick={onLogoutClick}>Log out</button>
    </>
  );
};
