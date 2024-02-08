import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Explore from './components/Explore';
import Problems from './components/Problems';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Landing/>}/>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/problems" element={<Problems/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
