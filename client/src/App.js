import React, { useContext} from 'react'
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import { UserContext } from './contexts/UserContext'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NewCampaign from './components/NewCampaign'
import Profile from './components/Profile'
import Campaigns from './components/Campaigns'
import Signup from './components/Signup'
import Login from './components/Login'
import ShowCampaign from './components/ShowCampaign'

function App() {
  const {user, setUser} = useContext(UserContext)

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="App">
        <Navbar handleLogout={handleLogout}/>
        {user ? (
        <Routes>
          <Route path="/campaigns" element={
            <Campaigns />
          }
          />
          <Route path="/campaigns/new" element={
            <NewCampaign />
          }
          />
          <Route path="/campaigns/:campaignId" element={
            <ShowCampaign />
          }
          />
         <Route path="/profile" element={
            <Profile />
          }
          />
          <Route path="/" element={
            <Home />
          }
          />
        </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={
              <Login />
            }
            />
            <Route path="/signup" element={
              <Signup />
            }
            />
            <Route path="/" element={
              <Home />
            }
            />
          </Routes>
        )}
    </div>
  );
}

export default App;
