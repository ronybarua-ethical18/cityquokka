import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { router } from "./routes/routes";
import SignUpCard from './pages/auth/SignUp/components/SignupCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpCard />} />
        {/* ... other routes ... */}
      </Routes>
    </Router>
  );
}

export default App;
