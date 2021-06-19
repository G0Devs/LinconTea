import React from 'react';
import Events from './Events';
import Products from './Products';
import Contact from './Contact';
import About from './About';
import Home from './Home'

const Route = ({ currentPath }) => {
  switch (currentPath) {
    case '/': return <Home />;
    case '/products': return <Products />;
    case '/about': return <About />;
    case '/events': return <Events />;
    case '/contact': return <Contact />;
    default: return <Home />;
  }
}

export default Route;