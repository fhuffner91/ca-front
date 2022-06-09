import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Card, Placeholder, Button } from "react-bootstrap";

export default function NovosPools(props) {
  const pool = props.pools;
  const [isLoading, setLoading] = useState(true);
  useEffect(async () => {
    await axios.get("http://localhost:3000")
    .then((response) => {
      setLoading(false);
    });
  }, []);
  return (
    <>
      <h2 className="text-center">Novos Pools</h2>
      {isLoading ? (
        <Card className="mb-2">
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
        </Card>
      ) : (
        <Card className="mb-2">
          <Card.Body>
            <Card.Title>{pool.name}</Card.Title>
            <Card.Text>{pool.description}</Card.Text>
            <Card.Img src={pool.image} />
          <Button variant="secondary">Entrar</Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

