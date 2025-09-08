import { Container } from "react-bootstrap";
import AppNavBar from "./components/app-nav-bar/AppNavBar";
import React, { useEffect, useState } from "react";
import { userService } from "./services/userService";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const run = async () => {
      try {
        const registered = await userService.register({
          name: "Kotresh DM",
          email: "kotresh@example.com",
          password: "123456",
        });
        console.log("✅ Registered:", registered);

        const profile = await userService.profile();
        console.log("👤 Profile:", profile);
      } catch (err: any) {
        console.error("❌ API Error:", err.response?.data || err.message);
      }
    };

    run();
  }, []);
  return (
    <React.Fragment>
      <AppNavBar />
      <Container className='mt-4 text-center'>
        <h1>This is react App</h1>
        <p>This is a simple React application with Bootstrap.</p>
        <p>{data ? data : "Loading..."}</p>
      </Container>
    </React.Fragment>
  );
}

export default App;
