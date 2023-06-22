import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,} from "react-router-dom";
import Home from './pages/Home';
import Chats from './pages/Chats';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/chats" element={<Chats />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App