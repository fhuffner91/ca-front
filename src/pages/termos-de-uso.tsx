import { Container, Row, Col, Placeholder } from "react-bootstrap";
import LayoutDefault from "src/layouts/default";

export default function TermosDeUso() {
  return (
    <>
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Termos de Uso</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Placeholder xs={6}></Placeholder> <Placeholder xs={2}></Placeholder>{" "}
          <Placeholder xs={2}></Placeholder> <Placeholder xs={2}></Placeholder>
          <Placeholder xs={12}></Placeholder>
          <Placeholder xs={6}></Placeholder> <Placeholder xs={2}></Placeholder>{" "}
          <Placeholder xs={12}></Placeholder> <Placeholder xs={1}></Placeholder>
          <Placeholder xs={12}></Placeholder>
          <Placeholder xs={12}></Placeholder> <Placeholder xs={2}></Placeholder>{" "}
          <Placeholder xs={2}></Placeholder> <Placeholder xs={2}></Placeholder>
          <Placeholder xs={12}></Placeholder>
          <Placeholder xs={6}></Placeholder> <Placeholder xs={2}></Placeholder>{" "}
          <Placeholder xs={2}></Placeholder> <Placeholder xs={1}></Placeholder>
          <Placeholder xs={12}></Placeholder>
          <Placeholder xs={6}></Placeholder> <Placeholder xs={8}></Placeholder>{" "}
          <Placeholder xs={12}></Placeholder>{" "}
          <Placeholder xs={12}></Placeholder>
          <Placeholder xs={12}></Placeholder>
          <Placeholder xs={6}></Placeholder> <Placeholder xs={2}></Placeholder>{" "}
          <Placeholder xs={2}></Placeholder> <Placeholder xs={1}></Placeholder>
          <Placeholder xs={12}></Placeholder>
        </Col>
      </Row>
    </Container>
    </>
  );
}

TermosDeUso.getLayout = (page) => {
  return <LayoutDefault>{page}</LayoutDefault>;
};
