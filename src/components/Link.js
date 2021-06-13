import React from 'react';

const Link = ({ href, className, label, isDropdown}) => {
  const onMenuOptionClick = (e) => {
    if (e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    window.history.pushState({}, '', href);
    const navigationEvent = new PopStateEvent('routeChange');
    window.dispatchEvent(navigationEvent);
  }

  return (
    <a href={href}
      className={`${className} ${isDropdown ? 'browse' : ''}`}
      onClick={onMenuOptionClick}
      key={label}>
      {label}
      { isDropdown ? <i className="dropdown icon"></i> : null}
    </a>
  );
}

export default Link;