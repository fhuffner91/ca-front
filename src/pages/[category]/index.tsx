import { Container, Row, Col, Placeholder } from "react-bootstrap";
import LayoutDefault from "src/layouts/default";
import Config from "src/app.config";

export default function Categoria(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">{props.title}</h1>
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
  );
}

Categoria.getLayout = (page) => {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export async function getStaticPaths() {
  const paths = Config.CATEGORIES.map((item) => ({
    params: {
      category: item.slug,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let details = Config.CATEGORIES.filter(
    (item) => item.slug == params.category
  )[0];
  return {
    props: {
      title: details?.title,
      slug: details?.slug,
      description: details?.description,
    },
  };
}
