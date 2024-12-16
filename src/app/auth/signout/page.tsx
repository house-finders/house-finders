'use client';

import { signOut } from 'next-auth/react';
import { Button, Col, Row } from 'react-bootstrap';

/** After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => (
  <Col id="signout-page" className="text-center py-3" style={{ marginTop: '20px' }}>
    <h2 style={{ color: 'white' }}>Do you want to sign out?</h2>
    <Row>
      <Col xs={4} />
      <Col>
        <Button type="button" variant="danger" onClick={() => signOut({ callbackUrl: '/', redirect: true })}>
          Sign Out
        </Button>
      </Col>
      <Col>
        <Button type="button" variant="secondary" href="/">
          Cancel
        </Button>
      </Col>
      <Col xs={4} />
    </Row>
  </Col>
);

export default SignOut;
