import { Container, Row, Col } from "react-bootstrap";
import LayoutDefault from "src/layouts/default";
import NovosPools from "src/components/novosPools";
import MelhoresPools from "src/components/melhoresPools";

export default function Index() {
  const QTDE_NOVOS_POOLS = 3;
  return (
    <>
      <Container>
        <Row>
          <Col>
            <NovosPools
              pools={Array.from({ length: QTDE_NOVOS_POOLS })}
            ></NovosPools>
          </Col>
        </Row>
        <Row>
          <Col>
            <MelhoresPools
              pools={Array.from({ length: QTDE_NOVOS_POOLS })}
            ></MelhoresPools>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Index.getLayout = (page) => {
  return <LayoutDefault>{page}</LayoutDefault>;
};
