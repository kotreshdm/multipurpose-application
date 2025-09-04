import { Container } from "react-bootstrap";
import AppNavBar from "./components/app-nav-bar/AppNavBar";

function App() {
  return (
    <Container fluid className='App'>
      <AppNavBar />
      <Container>
        <header className='App-header'></header>
        <h1>App This is a s</h1>
        <p>This is a simple React application with Bootstrap.</p>
      </Container>
    </Container>
  );
}

export default App;
