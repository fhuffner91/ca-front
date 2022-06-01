/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Card, Placeholder, Button, FormLabel } from "react-bootstrap";
import axios from "axios";

export default function Cadastro(props) {
  const [isLoading, setLoading] = useState(true);
  useEffect(async () => {
    await axios.get("http://localhost:3000").then((response) => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h2 className="text-center">Cadastro</h2>
      {isLoading ? (
        <Card className="mb-2">
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} /> <Placeholder xs={7} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={6} /> <Placeholder xs={8} />
              <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={6} /> <Placeholder xs={8} />
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} /> <Placeholder xs={7} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={6} /> <Placeholder xs={8} />{" "}
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
        </Card>
      ) : (
        <Card className="mb-2">
          <Card.Body>
            <FormLabel>Nome</FormLabel>
            <input type="text" className="form-control" />
            <FormLabel>Email</FormLabel>
            <input type="text" className="form-control" />
            <FormLabel>Categoria</FormLabel>
            <input type="text" className="form-control" />
            <FormLabel>Cnpj</FormLabel>
            <input type="text" className="form-control" />
            <FormLabel>Senha</FormLabel>
            <input type="text" className="form-control" />
            <FormLabel>Confirmar Senha</FormLabel>
            <input type="text" className="form-control" />
          </Card.Body>
          <Button variant="secondary">Cadastrar</Button>
        </Card>
      )}
    </>
  );
}
