import {useState,useEffect} from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom';
// import Lobby from './Pages/Lobby';
import Room from './pages/Room';
import Lobby from './pages/Lobby';
// import Room from './Pages/Room';

function App() {

  const [msg, setMsg] = useState("");
  useEffect(()=>{
    fetch("/test")
    .then(result=>result.json())
    .then(result=>setMsg(result));
  },[])


  return (
    <div className="App">
      심플한 채팅방
      <hr/>
      <Routes>
        <Route path="/" element={<Lobby/>}></Route>
        <Route path="/room/:roomId" element={<Room/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
