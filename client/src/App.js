import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import NewCampaign from './components/NewCampaign'
import Profile from './components/Profile'
import Campaigns from './components/Campaigns'
import Signup from './components/Signup'
import Login from './components/Login'


function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Home />
          }
          />
          <Route path="/campaigns" element={
            <Campaigns />
          }
          />
          <Route path="/campaigns/new" element={
            <NewCampaign />
          }
          />
         <Route path="/profile" element={
            <Profile />
          }
          />
          <Route path="/signup" element={
            <Signup />
          }
          />
          <Route path="/login" element={
            <Login />
          }
          />
        </Routes>
    </div>
  );
}

export default App;
