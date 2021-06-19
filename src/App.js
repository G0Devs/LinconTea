import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Route from './components/Route'

const menuOptions = [
  {
    link: '/',
    label: 'Home'
  },
  {
    link: '/products',
    label: 'Products',
    dropdown: true
  },
  {
    link: '/about',
    label: 'About Us'
  },
  {
    link: '/events',
    label: 'Events'
  },
  {
    link: '/contact',
    label: 'Contact Us'
  }
];
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || menuOptions[0].link);
  const onRouteChange = () => {
    setCurrentPath(window.location.pathname);
  }
  useEffect(() => {
    window.addEventListener('routeChange', onRouteChange);
    return (() => {
      window.removeEventListener('routeChange', onRouteChange);
    });
  }, []);
  return (
    <div>
      <Navbar activePath={currentPath} menuOptions={menuOptions} />
      <Route currentPath={currentPath} />
    </div>
  );
}

export default App;
