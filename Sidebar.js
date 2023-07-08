import { NavLink } from "react-router-dom";
import SidebarMenu from "./sidebarmenu";
import {FaBars, FaHome,FaUser} from 'react-icons/fa';
import {AiFillMessage} from 'react-icons/ai';
import {BsFiles} from 'react-icons/bs';
import {IoIosAnalytics} from 'react-icons/io';
import {IoMdSettings } from 'react-icons/io';
import {BiSearch} from 'react-icons/bi';
import { AnimatePresence, motion } from "framer-motion";


const routes = [
    {
        path: '/',
        name: 'Dashboard',
        icon: <FaHome />
    },
    {
      path: 'analytics',
      name: 'Analytics',
      icon: <IoIosAnalytics />
    },
    {
      path: 'files',
      name: 'Storage',
      icon: <BsFiles />
    },
    {
      path: 'msg',
      name: 'Message',
      icon: <AiFillMessage />
    },
    {
      path: 'settings',
      name: 'Settings',
      icon: <IoMdSettings />
    },
    {
        path: "/users",
        name: " ",
    },
      {
        path: "/users",
        name: " ",
        
      },
      {
        path: "/users",
        name: " ",
        
      },
      {
        path: "/users",
        name: " ",
        
      },
      {
        path: "/users",
        name: " ",
        
      },
      {
        path: "/users",
        name: " ",
        
      },
      {
        path: "/users",
        name: " ",
        
      },
      {
        path: "/users",
        name: " ",
        
      },
      {
        path: "/users",
        name: " ",
        
      },
      
    {
        path: "/users",
        name: "Profile",
        icon: <FaUser />,
      },
];

const SideBar = ({children}) => {

  // const [isOpen,setIsOpen] =useState(false);

  // const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="main-container">
          <div className="sidebar">
          <main>{children}</main>

            <div className="top_section">
              <h1 className="logo">SIDEBAR</h1>
              <div className="bars"><FaBars/></div>
            </div>

            <div className="search">
            <input type="text" placeholder="Type here..." />
              <div className="search_icon"><BiSearch/></div>
             
            </div>
            
          <section className="routes">
            {routes.map((route) => (
              <NavLink to={route.path} key={route.name} className="link">
                <div className="icon">{route.icon}</div>
                <div className="link-text">{route.name}</div>
              </NavLink>
            ))}
          </section>
          
          </div>  
        </div> 
    )
  }
  
  
  
  export default SideBar;
