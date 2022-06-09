
import { useState } from "react";
import { Card, Button, FormLabel } from "react-bootstrap";

export default function LoginModal(props) {
    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false);

  return (
    <>
        <Card className="mb-2"
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
          <Card.Body>
            <FormLabel>Email</FormLabel>
            <input type="text" className="form-control" />
            <FormLabel>Senha</FormLabel>
            <input type="text" className="form-control" />
          </Card.Body>
               <Button variant="secondary">Entrar</Button>
        </Card>
    </>
  );
}
