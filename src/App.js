import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {  BrowserRouter,  Routes,  Route,  Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>React Router Example</h1>
      <BrowserRouter>
      <Link to="/">Home</Link>{' '}
      <Link to="/about">About</Link>{' '}
      <Link to="/contact">Contact</Link>{' '}
      <Routes>
        <Route exact path="/"element={<Home />} />
        <Route path="/about"element={<About />} />
        <Route path="/contact"element={<Contact />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
