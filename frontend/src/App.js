import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import AuthPage from './components/auth';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
