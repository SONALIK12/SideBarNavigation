import './App.css';

import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Analytics from './Pages/Analytics';
import Dashboard from './Pages/Dashboard';
import Storage from './Pages/Storage';
import Message from './Pages/Message';
import Settings from './Pages/Settings';
import Users from './Pages/Users';
import Sidebar from './Component/sidebar';
import { Profiler } from 'react';
import { Button, Space } from 'antd';
import Header from "./Header";

function App() {
 
  return (
    <>
    <Router>
      <Header/>
       <h1>       </h1>


      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="files" element={<Storage />} />
        <Route path="msg" element={<Message />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<> not found</> } />
      </Routes>
      </Sidebar>
    </Router>

    </>
   
  );
}

export default App;
