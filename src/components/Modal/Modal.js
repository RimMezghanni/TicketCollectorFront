import { Button, Modal } from "react-bootstrap";
import React from 'react';

function ExampleModal(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.Title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{props.Body}</div>
          {/* <h4> {props.ticket.summary} </h4>
          <p>
        {props.ticket.description}
          </p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button className="w-50" style={{backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)"}} onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

 
    );
  }
  export default ExampleModal;