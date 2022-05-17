import { Container, Row, Col } from "react-bootstrap";
import LayoutDefault from "src/layouts/default";
import Login from "src/components/login";
import Cadastro from "src/components/cadastro";

export default function FinalizarCompra() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Login></Login>
          </Col>
          <Col>
            <Cadastro></Cadastro>
          </Col>
        </Row>
      </Container>
    </>
  );
}

FinalizarCompra.getLayout = (page) => {
  return <LayoutDefault>{page}</LayoutDefault>;
};
