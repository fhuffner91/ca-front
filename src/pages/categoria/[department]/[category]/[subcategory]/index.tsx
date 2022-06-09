import { useRouter } from "next/router";
import { Container, Row, Col, Placeholder } from "react-bootstrap";
import LayoutDefault from "src/layouts/default";
import { getAllCategories } from "src/services/api";

export default function SubCategoria(props) {
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

SubCategoria.getLayout = (page) => {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export async function getStaticPaths() {
  const data = await getAllCategories();
  const categories = data.filter((cat) => cat.level == 1);
  const subcategories = data.filter((cat) => cat.level == 2);
  const paths = subcategories.map((item) => ({
    params: {
      department: categories.filter(
        (department) => department.slug == item.parent
      )[0]?.parent,
      category: item.parent,
      subcategory: item.slug,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await getAllCategories();
  let details = data.filter((item) => item.slug == params.subcategory)[0];
  return {
    props: {
      title: details?.name,
      slug: details?.slug,
    },
  };
}
