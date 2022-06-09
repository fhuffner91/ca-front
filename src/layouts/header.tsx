
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import LoginCircle from "src/components/buttons/loginCircle";
export default function Header(props) {
  return (
    <Navbar  bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href={props.menu[0].path}>
         <span>Clube </span>
          <img
            alt=""
            src={props.logo}
            width="100"
            height="100"
            className="d-inline-block align-center"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.menu.map((item, key) => (
              <Nav.Link href={item.path}>{item.title}</Nav.Link>
            ))}
          </Nav>
          <Form.Control
            type="text"
            placeholder="Pesquisar"
            className="w-auto"
          />
          <Button variant="secondary"><BsSearch /></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
