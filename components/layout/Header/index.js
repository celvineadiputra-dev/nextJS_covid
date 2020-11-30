import React from "react";
import Head from "next/Head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";

function index(props) {
  const router = useRouter();
  console.log(props);
  return (
    <>
      <Head>
        <title>Kawal Covid</title>
      </Head>
      <Navbar bg="light" variant="light">
        <div className="container">
          <Navbar.Brand href="/">Kawal Covid</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/" eventKey="link-0">
              Home
            </Nav.Link>
            <Nav.Link href="/" eventKey="link-1">
              Indonesia
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}

export default index;
