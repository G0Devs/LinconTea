import React from 'react';
import Navbar from './components/Navbar'

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
  return (
    <div>
      <Navbar menuOptions={menuOptions} />
    </div>

  );
}

export default App;
