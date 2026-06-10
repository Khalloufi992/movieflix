import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card className="player-card">
      <Card.Img variant="top" src={image} className="player-img" />

      <Card.Body>
        <Card.Title className="text-center fw-bold">{name}</Card.Title>

        <p><b>Team:</b> {team}</p>
        <p><b>Nationality:</b> {nationality}</p>
        <p><b>Age:</b> {age}</p>

        <Badge bg="dark" className="mb-2">
          #{jerseyNumber}
        </Badge>

        <Button variant="primary" className="w-100">
          View Profile
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Player;