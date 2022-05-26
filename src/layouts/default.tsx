import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Config from "src/app.config";
import Header from "src/layouts/header";

export default function LayoutPadrao({ children }) {
  return (
    <>
      <Head>
        <title>{Config.APP_TITLE}</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container fluid>
        <Row>
          <Header
            title={Config.APP_TITLE}
            logo={Config.APP_LOGO}
            menu={Config.MENU}
          ></Header>
        </Row>
        <Row className="pt-4">
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
}
