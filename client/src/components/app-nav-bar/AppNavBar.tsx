import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function AppNavbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);
  return (
    <Navbar expand='lg' className='shadow-sm'>
      <Container className='p-0'>
        <Navbar.Brand href='#'>My App</Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
          <Nav className='mr-auto'>
            <Nav.Link href='#login'>Login</Nav.Link>
            <Button
              variant={darkMode ? "dark" : "light"}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ " : "🌙 "}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
