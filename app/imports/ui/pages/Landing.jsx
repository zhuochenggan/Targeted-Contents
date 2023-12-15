import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

const Landing = () => {
  const getHour = () => {
    const hour = new Date().getHours();
    let message;
    let emoji;
    let bgColor;
    let textColor;

    if (hour < 12) {
      message = 'Hello, It is the morning, smile and start your day off positively!';
      emoji = '☀️';
      bgColor = 'yellow';
      textColor = '#333';
    } else if (hour < 18) {
      message = 'Keep the good work going, the day is almost over!';
      emoji = '☕';
      bgColor = 'purple';
      textColor = '#fff';
    } else {
      message = 'Take some good rest and goood night!';
      emoji = '🌙';
      bgColor = 'blue';
      textColor = '#fff';
    }

    return { message, emoji, bgColor, textColor };
  };

  const { message, emoji, bgColor, textColor } = getHour();

  return (
    <Container id="landing-page" fluid className="py-3">
      <Row className="align-middle text-center">
        <Col xs={12} className="d-flex flex-column justify-content-center">
          <h2 className="p-3">Below design your own UI and Targeted Content methods</h2>
          <h5 className="p-5">Sample: Different Message, Emoji, Color depend on time opening this page</h5>
          <Card className="p-5" style={{ backgroundColor: bgColor, color: textColor }}>
            <Card.Body>
              <Card.Title>{emoji} {message}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
