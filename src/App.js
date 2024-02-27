import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Explore from './components/Explore';
import Problems from './components/Problems';
import Profile from './components/Profile';
import AdminUsers from './components/AdminUsers';
import AdminQuestions from './components/AdminQuestions';
import AdminCreate from './components/AdminCreate';
import AdminEdit from './components/AdminEdit';
import TopicDetailPage from './components/TopicDetailPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Landing/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/problems" element={<Problems/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path='/admin-questions' element={<AdminQuestions/>} />
        <Route path='/admin-users' element={<AdminUsers/>} />
        <Route path='/add' element={<AdminCreate/>} />
        <Route path='/edit' element={<AdminEdit/>} />
        <Route path='/topic/:topicId' element={<TopicDetailPage/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
