import logo from './logo_main.png';
import bg from './bg.jpg';
import './App.css';

function App() {
  return (
    <div id='frame'>
      {/* <h3>Website Under Construction! Please visit later.</h3> */}
      <img id= 'bg' src={bg} alt='LINCON background' />
      <img id='mainLogo' src={logo} alt='LINCON logo' />
    </div>
  );
}

export default App;
