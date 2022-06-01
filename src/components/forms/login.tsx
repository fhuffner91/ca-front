import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Placeholder, Button, FormLabel } from "react-bootstrap";

export default function Login(props) {
  const [isLoading, setLoading] = useState(true);
  useEffect( async () => {
     await axios.get("http://localhost:3000").then((response) => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h2 className="text-center">Login</h2>
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
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
        </Card>
      ) : (
        <Card className="mb-2">
          <Card.Body>
            <FormLabel>Email</FormLabel>
            <input type="text" className="form-control" />
            <FormLabel>Senha</FormLabel>
            <input type="text" className="form-control" />
          </Card.Body>
               <Button variant="secondary">Entrar</Button>
        </Card>
      )}
    </>
  );
}
