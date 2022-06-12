import { Container, Row, Col } from "react-bootstrap";
import LayoutDefault from "src/layouts/default";
import NovosPools from "src/components/widgets/novosPools";
import MelhoresPools from "src/components/widgets/melhoresPools";
import HomeModal from "src/components/widgets/homeModal";
import Config from "src/app.config";
import LayoutLandingPage from "src/layouts/landing";

export function Home() {
  const QTDE_NOVOS_POOLS = 3;
  return (
    <>
      <HomeModal />
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
export function Landing() {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="text-white">Bem vindo a nossa página de Pré Cadastro</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default function Index() {
  return Config.APP_LANDING_PAGE ? <Landing></Landing> : <Home></Home>;
}

Index.getLayout = (page) => {
  return Config.APP_LANDING_PAGE ? (
    <LayoutLandingPage>{page}</LayoutLandingPage>
  ) : (
    <LayoutDefault>{page}</LayoutDefault>
  );
};
