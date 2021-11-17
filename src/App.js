import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //useState модальный окнолордун состояниесин озгорткону
                                //
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main> {/* MainHeader компонентин liftingUp эки пропсу бар, navigation компоненттен значение алат */}
        {!isLoggedIn && <Login onLogin={loginHandler} />}{/* true && true, login кайтарат,  */}
        {isLoggedIn && <Home onLogout={logoutHandler} />}{/* login деген кнопканы басканда useState ке true 
                                                           значение келет ошондо Home ачылат */}
      </main>
    </React.Fragment>
  );
}

export default App;
