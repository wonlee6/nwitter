import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';

function App() {
  const [init, setInit] = useState(false);
  // console.log(authService.currentUser);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      // 로그인 로그아웃
      if (user) {
        // setIsLoggedIn(true);
        setUserObj(user);
        // } else {
        //   setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        'initlazing'
      )}
      <footer>&copy; {new Date().getFullYear()} nwitter</footer>
    </>
  );
}

export default App;
