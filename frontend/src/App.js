import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/home';
import AuthPage from './components/auth/auth';
import MyNavbar from './components/navbar/navbar';
function App() {
  return (
    
    <div>
      <MyNavbar/>

     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
    </div>
  
  );
}

export default App;
