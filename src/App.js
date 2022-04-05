import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

import React, { useReducer ,useState} from 'react';
import {createStore} from 'redux';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Tickets from './components/Tickets/Tickets';
import Dashboard from './components/Dashboards/Dashboard';
export const AppContext = React.createContext();


function App() {
  
  const [data, setdata] = useState(null);

  return (
    <div className="App">
          <div id="main-wrapper">

      <Header />
      {/* <SideBar/> */}
     {/* <Sidebar/> */} 
  
  {/* <RegistrationForm/>
  <Customers/> */}
  
     <div className="container d-flex align-items-center flex-column mt-6">

     <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm/>}  Link To="/">
          {/* <Route index element={<RegistrationForm />} /> */} 
        </Route>
        <Route  path="/tickets" exact  element={<Tickets />} Link To="/tickets"/>
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
    </div>
     </div>
    </div>

  );
}



export default App;
