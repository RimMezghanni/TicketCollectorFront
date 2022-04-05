import axios from 'axios';
import Context from 'react';
import React, { useState , useEffect} from 'react';
import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { AppContext } from '../../App'
import {connect} from 'react-redux';
import TicketService from '../../services/TicketService';
import  {useSelector} from 'react-redux';
import Loader from '../Loader';
import {useDispatch} from "react-redux";
import {retrieve} from "../../ticket";
import PopUp from '../PopUp';

function RegistrationForm(props) {
    const [hasError, setHasError] = useState(false);
    const [hasProb, setHasProb] = useState(true);
    const [hasloading, setHasloading] = useState(false);


    const [state, setState] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        tickets:""
    })

    const dispatch = useDispatch()
// let dispatch = useDispatch();
    // for updating state
    const navigate = useNavigate();
    const handleChange = (e) => {

        if ((state.email === '') || (state.password === '')){
           
            setHasProb(true);
           
        }
        else {setHasProb(false);}
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }


   
    const sendDetailsToServer = (newValue) => {
if ((state.email === '') || (state.password ==='')){

    setHasProb(true);
    
}
        if((state.email.length !== 0 )&& (state.password.length !==0)) {
            // props.showError(null);
            setHasProb(false)
            const payload={
                "email":state.email,
                "password":state.password,
            }
            setHasloading(true);

            TicketService.getAll(payload).then(function (response) {
                if(response.status === 200){
                    setHasloading(false);

                    console.log(response.data);
                    dispatch(retrieve({ data: response.data}))
                    navigate("/tickets");
                    
                } else {
                    setHasloading(false);

                  console.log(response.data)
                  setHasError(true)
                
                }

            })
                        //setticket( value => ({ value:  response.data}))

                        //navigate('/a' , {
                           // tickets : response.data
                        //});
                      
                        // redirectToHome();
                        // props.showError(null)
                   
                
                
         
            
        }
        
    }
       
    // for executing form
    const handleSubmitClick = (e) => {
        e.preventDefault();
      
            sendDetailsToServer();
            

            // TicketService.getAll().then(function (response) {
            //                     if(response.status === 200){
            //                         console.log(response.data);
            //                         dispatch(retrieve({ data: response.data}))

            //  } })
            //  navigate("/tickets");

             
            // Navigate('/tutorials')
        //    this.setState({
        //     tickets :   retrieveTutorials()

        //   });
        //   console.log(this.tickets)
 
    }
   

    const [modalShow, setModalShow] = React.useState(false);

    return (
    
      <>
                {hasloading && <Loader/>}
                {!hasloading && 
                <>
                <div className="card col-12 col-lg-4 login-card mt-2 hv-center">

                    <div className="card-header bg-white">
                        <h6 className="font-medium mb-3">Connect To </h6>
                        <img width={"70px"} height={"35px"} src='images/JIRA.png' /> 
                    </div>
                
                    <form style={{marginTop : "10px"}}>
                        <div className="form-group text-left">
                            {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                            <input type="email"
                                className="form-control"
                                id="email"
                                value={state.email}
                                aria-describedby="emailHelp"
                                placeholder="Enter Email" required
                                onChange={handleChange} requiredpattern="*|@|*|.|*" onPaste={handleChange}
                            />
                        
                        </div>
                        <div className="form-group text-left mt-4">
                            {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                            <input type="password"
                                className="form-control"
                                id="password"
                                value={state.password}
                                placeholder=" Enter Password" required
                                onChange={handleChange} onPaste={handleChange}
                            />
                        </div>
                    
                        <button
                            type="submit"
                            className="btn w-50 mt-4 mb-3" style={{backgroundColor:"#fd746b" ,  fontSize: "16px"
                            ,borderRadius: "5px"}}
                            // style={{backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)"}}
                            onClick={handleSubmitClick}  > 
                            {/* disabled={hasProb} */}
                                {/* fd746b */}

                            <span className='text-white' > Connect </span>
                        </button>
                        {hasProb && <PopUp title={"Please fill the empty fields"}/>}
                        {/* <div>"hasError"</div> */}
                        {/* {hasError && <Modal show={true} Body="hasError" Title="Error" />} */}
                        {hasError && <PopUp  title="Authentification Failed ..
                        Please Retry" />}

                    

                                    


                    </form>
                    </div>

                </>
                }
              

            {/* <button onClick={() => dispatch(retrieve({ data:"rim"}))}> Change the values</button> */}
        
            </>
    )
}

  

  


export default RegistrationForm;
