import Link from "next/link";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  Col,
  Row,
  DropdownButton,
  DropdownItem,

} from "react-bootstrap";
import { BsCartCheck, BsPersonCircle, BsSearch } from "react-icons/bs";

export default function Header(props) {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href={props.menu[0].path}>
          <span>
            <strong>Clube </strong>
          </span>
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
         
          <Form.Control
            type="text"
            placeholder="Busque seu produto"
            className="sm-search ml-auto"
          />
          <Button variant="secondary">
            <BsSearch />
          </Button>        
          <Nav className="me-auto">
            {props.menu.map((item, key) => (
              <Nav.Link href={item.path}>{item.title}</Nav.Link>
            ))}
          </Nav>
        
          <>
            <style type="text/css">
              {`
                 .btn-flat {
                 color: white;
              }

             .btn-xxl {
             padding: 1rem 1.5rem;
             font-size: 1.5rem;
             }
             `}
            </style>

            <Button>
              <BsCartCheck />
            </Button>
          </>
            <DropdownButton id="dropdown-basic-button" title={<BsPersonCircle />}>
              <DropdownItem href="/">Sair</DropdownItem>
              <DropdownItem href="/">Minha Conta</DropdownItem>
            </DropdownButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
