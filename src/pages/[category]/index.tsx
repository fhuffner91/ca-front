import { useRouter } from "next/router";
import { Container, Row, Col, Placeholder } from "react-bootstrap";
import LayoutDefault from "src/layouts/default";
import {getAllCategories} from 'src/services/api'

export default function Categoria(props) {
  const router = useRouter();

  return router.isFallback ? (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Loading</h1>
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
  ) : (
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
  const categories = await getAllCategories();
  const paths = categories.map((item) => ({
    params: {
      category: item.slug,
    },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const categories = await getAllCategories();
  let details = categories.filter((item) => item.slug == params.category)[0];
  return {
    props: {
      title: details?.title,
      slug: details?.slug,
      description: details?.description,
    },
  };
}
