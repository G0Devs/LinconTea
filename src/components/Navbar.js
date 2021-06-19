import React from 'react';
import Link from './Link';

const Navbar = ({ menuOptions, activePath }) => {
  const renderedMenuOptions = menuOptions.map(option => {
    return (
      <Link href={option.link}
        className={`item ${option.link === activePath ? 'active' : ''}`}
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