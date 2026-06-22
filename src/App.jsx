import './App.css'
import logo from './assets/logo.png';
import pointer from './assets/pointer.png';
import wormhole from './assets/wormhole.png';
import circle from './assets/circle.png';
import diamond from './assets/diamond.png';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <span>ABOUT</span>
          <span>PROJECTS</span>
          <span>EVENTS</span>
          <span>BLOGS</span>
          <span>TEAM</span>
          <span>FAQ</span>
        </div>
      </nav>
      <button className='button'>CONTACT</button>

      <main className="hero">
        <h1 className="title">VITMAS</h1>

        <p className="subtitle">
          BRIDGING THE GAP BETWEEN MATHEMATICAL THEORY
          <br/>
          AND TECHNOLOGICAL INNOVATION
        </p>
      </main>
      <img src={logo} className='logo' />
    </>
  );
}
export default App