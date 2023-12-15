import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Privacy = () => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Col xs={12}>
        <h2 className="text-center mb-4">Privacy Notice for [Your Website Name]</h2>
      </Col>

      <Col xs={12} md={8}>
        <Card>
          <Card.Body>
            <Card.Title>Introduction</Card.Title>
            <Card.Text>
              {/* eslint-disable-next-line max-len */}
              Welcome to [Your Website Name]. We are committed to protecting your privacy and handling your data in an open and transparent manner. This privacy notice explains how we collect, use, share, and protect your personal information when you visit our website or use our services.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3">
          <Card.Body>
            <Card.Title>1. Information We Collect</Card.Title>
            <Card.Text>
              We may collect the following types of information:
              <ul>
                <li><strong>Personal Information:</strong> This includes your name, email address, phone number, and any other information you provide when you register or interact with our services.</li>
                <li><strong>Usage Information:</strong> We collect information about how you use our website, such as the pages you visit, the links you click, and the searches you make.</li>
                <li><strong>Technical Information:</strong> This includes your IP address, browser type, device information, and other technical data.</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3">
          <Card.Body>
            <Card.Title>2. How We Use Your Information</Card.Title>
            <Card.Text>
              We use your information for the following purposes:
              <ul>
                <li>To provide and improve our services.</li>
                <li>To communicate with you about updates, offers, and promotions.</li>
                <li>To personalize your experience on our site.</li>
                <li>For security, legal, and compliance purposes.</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3">
          <Card.Body>
            <Card.Title>3. Sharing Your Information</Card.Title>
            <Card.Text>
              We may share your information with:
              <ul>
                <li>Service providers who assist us in operating our website and conducting our business.</li>
                <li>Third parties for marketing or advertising purposes, but only with your explicit consent.</li>
                <li>Law enforcement or other authorities if required by law.</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3">
          <Card.Body>
            <Card.Title>4. Your Rights and Choices</Card.Title>
            <Card.Text>
              You have certain rights regarding your personal information, including the right to access, correct, or delete your data. You can also opt out of certain uses of your information, such as receiving marketing communications.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3">
          <Card.Body>
            <Card.Title>5. Data Security</Card.Title>
            <Card.Text>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3">
          <Card.Body>
            <Card.Title>6. International Transfers</Card.Title>
            <Card.Text>
              Your information may be transferred to and processed in countries other than your own, where data protection laws may differ.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3">
          <Card.Body>
            <Card.Title>7. Changes to This Notice</Card.Title>
            <Card.Text>
              We may update this privacy notice from time to time. We will notify you of any significant changes by posting the new notice on our website.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3">
          <Card.Body>
            <Card.Title>8. Contact Us</Card.Title>
            <Card.Text>
              If you have any questions about this privacy notice or our data practices, please contact us at [Your Contact Information].
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="text-center mt-4">
          <p>By using our website, you consent to our collection, use, and sharing of your information as described in this privacy notice.</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Privacy;
