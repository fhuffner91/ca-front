import { useEffect, useState } from "react";
import { Button, Card, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";




export default function HomeModal(props){
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false);
  
  return (
    <Modal
    show={show}
    onHide={handleClose}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <ModalHeader closeButton>
      <ModalTitle id="contained-modal-title-vcenter">
        Clube Atacadão
      </ModalTitle>
    </ModalHeader>
    <ModalBody>
      <h4>O clube do MEI</h4>
      <p>
       Aqui você compra junto e mais barato!
      </p>
    </ModalBody>
    <ModalFooter>
      <Button onClick={handleClose}>Fechar</Button>
    </ModalFooter>
  </Modal>
);
}
 