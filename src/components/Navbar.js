import React, { useEffect, useState } from 'react';
import Link from './Link';

const Navbar = ({ menuOptions }) => {
  const [currentPath, setCurrentPath] = useState(menuOptions[0].link);
  const onRouteChange = () => {
    setCurrentPath(window.location.pathname);
  }
  
  useEffect(() => {
    window.addEventListener('routeChange', onRouteChange);
    return (() => {
      window.removeEventListener('routeChange', onRouteChange);
    });
  }, []);
  const renderedMenuOptions = menuOptions.map(option => {
    return (
      <Link href={option.link}
        className={`item ${option.link === currentPath ? 'active' : ''}`}
        label={option.label}
        key={option.label}
        isDropdown={option.dropdown || false}/>
    );
  });
  return (
    <div className="ui secondary pointing menu">
      {renderedMenuOptions}
    </div>
  );
}

export default Navbar;