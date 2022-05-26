import { Col, Card, Placeholder, Button } from "react-bootstrap";

export default function NovosPools(props) {
  return (
      <>
      <h2 className="text-center">Novos Pools</h2>
      {props.pools.map((pool) => (
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
      ))}
    </>
  );
}
