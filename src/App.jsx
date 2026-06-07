

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "Anouar";

function App() {
  return (
    <Container className="mt-5 d-flex flex-column align-items-center">

      <Card style={{ width: "22rem" }}>
        <Image />

        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <h2 className="mt-3">
        Hello, {firstName ? firstName : "there!"}
      </h2>

      {firstName && (
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          width="120"
        />
      )}

    </Container>
  );
}

export default App;