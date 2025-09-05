import { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Dropdown,
  Image,
} from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../config/redux/store";
import { loginUser, logout } from "../../config/redux/slices/authSlice";

function AppNavbar() {
  const [darkMode, setDarkMode] = useState(false);
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(loginUser({ email: "test@example.com", password: "123456" }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

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

          <Nav className='align-items-center'>
            {auth.user ? (
              <Dropdown align='end'>
                <Dropdown.Toggle
                  as='div'
                  className='d-flex align-items-center'
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={`https://ui-avatars.com/api/?name=${auth.user.name}`}
                    roundedCircle
                    width='32'
                    height='32'
                    className='me-2'
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Header>
                    <strong>{auth.user.name}</strong>
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#profile'>Profile</Dropdown.Item>
                  <Dropdown.Item href='#settings'>Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link onClick={handleLogin}>Login</Nav.Link>
            )}

            <Button
              variant={darkMode ? "dark" : "light"}
              onClick={() => setDarkMode(!darkMode)}
              className='ms-3'
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
