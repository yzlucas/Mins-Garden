import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Routes>
            <Route path="/" element={
              <div>
                <h1>🌱 Welcome to Mins-Garden</h1>
                <p>This is a temporary landing page</p>
              </div>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <nav
            className=""
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              width: '100%',
              background: 'rgba(40,44,52,0.95)',
              textAlign: 'center',
              padding: '1rem 0',
              zIndex: 100,
            }}
          >
            <Link
              to="/contact"
              className="text-xl font-semibold"
              style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </Router>
  );
}

export default App;
