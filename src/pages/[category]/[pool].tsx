import { Container, Row, Col, Placeholder } from "react-bootstrap";
import LayoutDefault from "src/layouts/default";
import Config from "src/app.config";

export default function Pool(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">{props.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Placeholder xs={6}></Placeholder>{" "}<Placeholder xs={2}></Placeholder>{" "}
          <Placeholder xs={2}></Placeholder>{" "}<Placeholder xs={2}></Placeholder>
          <Placeholder xs={12}></Placeholder>
          <Placeholder xs={6}></Placeholder>{" "}<Placeholder xs={2}></Placeholder>{" "}
          <Placeholder xs={12}></Placeholder>{" "}<Placeholder xs={1}></Placeholder>
          <Placeholder xs={12}></Placeholder>
          <Placeholder xs={12}></Placeholder>{" "}<Placeholder xs={2}></Placeholder>{" "}
          <Placeholder xs={2}></Placeholder>{" "}<Placeholder xs={2}></Placeholder>
          <Placeholder xs={12}></Placeholder>
          <Placeholder xs={6}></Placeholder>{" "}<Placeholder xs={2}></Placeholder>{" "}
          <Placeholder xs={2}></Placeholder>{" "}<Placeholder xs={1}></Placeholder>
          <Placeholder xs={12}></Placeholder>
          <Placeholder xs={6}></Placeholder>{" "}<Placeholder xs={8}></Placeholder>{" "}
          <Placeholder xs={12}></Placeholder>{" "}<Placeholder xs={12}></Placeholder>
          <Placeholder xs={12}></Placeholder>
          <Placeholder xs={6}></Placeholder>{" "}<Placeholder xs={2}></Placeholder>{" "}
          <Placeholder xs={2}></Placeholder>{" "}<Placeholder xs={1}></Placeholder>
          <Placeholder xs={12}></Placeholder>
        </Col>
      </Row>
    </Container>
  );
}

Pool.getLayout = (page) => {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export async function getStaticPaths() {
  const paths = Config.POOLS.map((item) => ({
    params: {
      pool: item.slug,
      category: item.category,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let details = Config.POOLS.filter((item) => item.slug == params.pool)[0];
  return {
    props: {
      title: details?.title,
      slug: details?.slug,
      description: details?.description,
      category: details?.category,
    },
  };
}
