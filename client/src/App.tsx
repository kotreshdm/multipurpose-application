import { Container } from "react-bootstrap";
import AppNavBar from "./components/app-nav-bar/AppNavBar";
import React, { useState } from "react";

function App() {
  return (
    <React.Fragment>
      <AppNavBar />
      <Container className='mt-4 text-center'>
        <h1>This is react App</h1>
        <p>This is a simple React application with Bootstrap.</p>
      </Container>
    </React.Fragment>
  );
}

export default App;
