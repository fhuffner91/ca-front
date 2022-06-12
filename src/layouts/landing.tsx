import Head from "next/head";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Config from "src/app.config";

export default function LayoutLandingPage({ children }) {
  return (
    <>
      <Head>
        <title>{Config.APP_TITLE}</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <header>
        <Navbar bg="secondary" expand="lg" variant="dark">
          <Navbar.Brand href={Config.MENU[0].path} className="mx-auto">
            <img alt="" src={Config.APP_LOGO} width="100" height="50" />
          </Navbar.Brand>
        </Navbar>
      </header>
      <main>
        <Container fluid>
          <Row className="pt-4">
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
