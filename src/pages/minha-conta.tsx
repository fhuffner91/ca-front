import { Container, Row, Col } from "react-bootstrap";
import LayoutDefault from "src/layouts/default";
import Login from "src/components/forms/login";
import Cadastro from "src/components/forms/cadastro";

export default function MinhaConta() {
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

MinhaConta.getLayout = (page) => {
  return <LayoutDefault>{page}</LayoutDefault>;
};
