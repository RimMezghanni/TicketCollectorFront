import React, { useEffect, useContext, useState } from 'react';
import {AppContext} from '../../App';
import axios from 'axios'
import ExampleModal from '../Modal/Modal';

// import { Route, useNavigate } from 'react-router-dom';
import { valueToNode } from '@babel/types';
import Echelle from "./Echelle"

import  {useSelector,useDispatch} from 'react-redux';

function Tickets() {
  const ticket = useSelector((state) => state.ticket.value)
  const [Etat, setEtat] = useState("open");

  // const [state, setState] = React.useState([])
  const [modalShow, setModalShow] = React.useState(false);

  // const [ticket, setTicket] = React.useState({ summary: "", description: "" });

  // const {tickets} = route.params;

  // const navigate = useNavigate();

  
  // function handleClick() {
  //   navigate('/b');

  // }

// / const getCustomerData = () => {
  //   axios.get('http://localhost:8090/departments').then(response => {
  //     setState(response.data.issues)
  //     console.log(state)
  //   })
  // };

  // if (state == [])
  //   return (<p>Loading data</p>
  //     )

  
  return (
  
    
    <div class="main-content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-block">
                        <div class="table-overflow">
<table class="table">
  <thead style={{backgroundColor : "#fff" , border  : "1px solid #f99081"}}>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Summary</th>
      <th scope="col">Description</th>
      <th scope="col">AssignedTo</th>
      <th scope="col">AssignedToEmail</th>
      <th scope="col">State</th>


    </tr>
  </thead>
  <tbody style={{borderTop : "1px solid #f99081"}}>
  {
  ticket.data.map((element,key) => {
    console.log(element.state);
    if(element.state === "Fermée"){ return (
      <tr key={key}>
      <th scope="row">{element.id}</th>
      <td>{element.summary}</td>
      <td>{element.description}</td>
      <td>{element.assignedTo}</td>
      <td>{element.assignedToEmail}</td>
      <td><i className="fa fa-key" style={{color:"#F7A859"}}></i></td>
      {/* <td> </td> */}
      </tr>
    )}

    if(element.state === "Résolu"){ return (
      <tr key={key}>
      <th scope="row">{element.id}</th>
      <td>{element.summary}</td>
      <td>{element.description}</td>
      <td>{element.assignedTo}</td>
      <td>{element.assignedToEmail}</td>
      <td><i className="fa fa-check-circle" style={{color:"#1EA076"}}></i></td></tr>
    )}
     
    if(element.state === "En cours"){ return (
      <tr key={key}>
      <th scope="row">{element.id}</th>
      <td>{element.summary}</td>
      <td>{element.description}</td>
      <td>{element.assignedTo}</td>
      <td>{element.assignedToEmail}</td>
      <td> <i className="fa fa-spinner" aria-hidden="true" style={{color:"#F9937C"}}></i></td></tr>
    )}
    if(element.state === "Waiting for support"){ return (
      <tr key={key}>
      <th scope="row">{element.id}</th>
      <td>{element.summary}</td>
      <td>{element.description}</td>
      <td>{element.assignedTo}</td>
      <td>{element.assignedToEmail}</td>
      <td> <i className="fa fa-user-circle" aria-hidden="true" style={{color:"#FFD700", width:"50px"}}></i></td></tr>
    )}
    
    


  })
}

   
{/*   
  //  {console.log("eeeee")}
   /* {console.log(props.tutorials)} */
   /* {ticket.data.map(h=> 
   <div class="card">
  <div class="card-header">
    {h.id}
  </div>
  <div class="card-body">
    <h5 class="card-title"> {h.assignedTo}
</h5>
    <p class="card-text">{h.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */ }


</tbody>
</table>
</div></div></div></div></div></div></div>

)


  
//   {if (h.state == "Fermée")  return <button className="badge badge-danger mr-2"> closed </button>
//   else if (h.state == "open") return <button className="badge badge-success"> open </button>
//   else return <div></div>
// }
// //{ticket.data.map(h=> h.summary)}

}

<Echelle/>
export default Tickets;
