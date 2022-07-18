import React, { useState } from 'react';
import MainPage from './pages/main/mainPage';
import DNAFactoryPage from './pages/dnaFactory/DNAFactoryPage';
import strings from './common/strings';

import './App.css';
function App() {
  const MAIN = 0;
  const DNAFACTORY = 1;

  const [currentMenu, setCurrentMenu] = useState(MAIN);

  const handleClickMain = () => {
    setCurrentMenu(MAIN);
  };

  const handleClickDNAFactory = () => {
    setCurrentMenu(DNAFACTORY);
  };

  const getCurrentPage = (currentMenu) => {
    switch (currentMenu) {
      default:
      case MAIN:
        return <MainPage />;
      case DNAFACTORY:
        return <DNAFactoryPage />;
    }
  };

  return (
    <div>
      <div className='menu_bar'>
        <div
          className={`menu_button ${currentMenu === MAIN ? 'menu_button__selected' : strings.empty}`}
          onClick={handleClickMain}
        >
          {strings.main}
        </div>
        <div
          className={`menu_button ${currentMenu === DNAFACTORY ? 'menu_button__selected' : strings.empty}`}
          onClick={handleClickDNAFactory}
        >
          {strings.dnaFactory}
        </div>
      </div>
      <div className='page_content'>{getCurrentPage(currentMenu)}</div>
    </div>
  );
}

export default App;
