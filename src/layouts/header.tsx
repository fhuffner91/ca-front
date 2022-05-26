import { Container, Navbar, Nav, Placeholder } from "react-bootstrap";

export default function Header(props) {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href={props.menu[0].path}>
          <img
            alt=""
            src={props.logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          {props.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.menu.map((item, key) => (
              <Nav.Link href={item.path}>{item.title}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
