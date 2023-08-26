import React, { useContext} from 'react'
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import { UserContext } from './contexts/UserContext'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NewCampaign from './components/NewCampaign'
import MyCharacters from './components/MyCharacters'
import EditCharacter from './components/EditCharacter'
import Campaigns from './components/Campaigns'
import Signup from './components/Signup'
import Login from './components/Login'
import ShowCampaign from './components/ShowCampaign'
import { useEffect, useState } from 'react'

function App() {
  const [campaigns, setCampaigns] = useState('')
  const [myCharacters, setMyCharacters] = useState('')
  const [selectedCharacter, setSelectedCharacter] = useState('')
  const {user, setUser} = useContext(UserContext)
  


  useEffect(() => {
    // load campaign data
    fetch("/campaigns").then((r) => {
      if (r.ok) {
        r.json().then((campaign) => setCampaigns(campaign));
      }
    });
  }, []);


  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        setMyCharacters(null);
      }
    });
  }

  return (
    <div className="App">
        <Navbar handleLogout={handleLogout}/>
        {user ? (
        <Routes>
          <Route path="/campaigns" element={
            <Campaigns campaigns={campaigns}/>
          }
          />
          <Route path="/campaigns/new" element={
            <NewCampaign setCampaigns={setCampaigns}/>
          }
          />
          <Route path="/campaigns/:campaignId" element={
            <ShowCampaign />
          }
          />
         <Route path="/characters" element={
            <MyCharacters 
              myCharacters={myCharacters} 
              setMyCharacters={setMyCharacters} 
              setSelectedCharacter={setSelectedCharacter}
            />
          }
          />
          <Route path="/characters/:id/edit" element={
            <EditCharacter 
              myCharacters={myCharacters} 
              setMyCharacters={setMyCharacters} 
              selectedCharacter={selectedCharacter}
              setSelectedCharacter={setSelectedCharacter}
            />
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
