import './App.css';
import { Table } from 'antd';
import 'antd/dist/reset.css';
import React from 'react';
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

function App() {const data=[
    {
      name:"Name 1",
      age: 10,
      address: "Address 1",
      key:"1"
    },
    {
      name:"Name 2",
      age: 20,
      address: "Address 2",
      key:"2"
    },
    {
      name:"Name 3",
      age: 30,
      address: "Address 3",
      key:"3"
    },
  ]
  const columns=[
    {
      title:"Name",
      dataIndex:'name',
      key:"key",
      render:  name=> {
        return <a>{name}</a>
      }
    },
    {
      title:"Age",
      dataIndex:'age',
      key:"key"
    },
    {
      title:"Address",
      dataIndex:'address',
      key:"key"
    },
    {
      title:"Graduated?",
      key:"key",
      render : playload=>{
        return <p>{playload.age>20?"True":"False"}</p>
      }
    },
  ]
 
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
<div  className="App">
      <header className="App-header">
        <Table
          dataSource={data}
          columns={columns}>
        </Table>
      </header>
    </div>
    </>
   
  );
}

export default App;
