

import { Container, Row, Col, CarouselItem, Carousel } from "react-bootstrap";
import LayoutDefault from "src/layouts/default";
import NovosPools from "src/components/widgets/novosPools";
import MelhoresPools from "src/components/widgets/melhoresPools";

import Carrossel from "src/components/widgets/carrossel";

export default function Index() {
  const QTDE_NOVOS_POOLS = 3;
  return (
    <>
      <Container>
       <Carrossel />
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
