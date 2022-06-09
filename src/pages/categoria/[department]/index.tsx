import { useRouter } from "next/router";
import { Container, Row, Col, Placeholder } from "react-bootstrap";
import LayoutDefault from "src/layouts/default";
import { getAllCategories } from "src/services/api";

export default function Departamento(props) {
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

Departamento.getLayout = (page) => {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export async function getStaticPaths() {
  const data = await getAllCategories();
  const departments = data.filter((cat) => cat.level == 0);
  const paths = departments.map((item) => ({
    params: {
      department: item.slug,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await getAllCategories();
  let details = data.filter((item) => item.slug == params.department)[0];
  return {
    props: {
      title: details?.name,
      slug: details?.slug,
    },
  };
}
