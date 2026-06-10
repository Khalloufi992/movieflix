import React from 'react';
import { Navbar, Container, Nav, Card, Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">

        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My React App</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Heading */}
        <Container className="mt-4">
          <h1 className="text-center mb-4">
            Welcome to React Bootstrap
          </h1>

          {/* Cards */}
          <div className="d-flex justify-content-center gap-4 flex-wrap">

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card One</Card.Title>
                <Card.Text>
                  This is the first card using React Bootstrap.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Two</Card.Title>
                <Card.Text>
                  This is the second card using React Bootstrap.
                </Card.Text>
                <Button variant="success">Read More</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Three</Card.Title>
                <Card.Text>
                  This is the third card using React Bootstrap.
                </Card.Text>
                <Button variant="dark">Read More</Button>
              </Card.Body>
            </Card>

          </div>
        </Container>

      </div>
    </>
  );
}

export default App;