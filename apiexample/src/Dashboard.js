import React from 'react';
import { Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap';
import { Outlet, Link, useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: clear user session data
    sessionStorage.removeItem("token");

    // Redirect to login page
    navigate('/');
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
        <Container fluid>
          <Navbar.Brand>My Dashboard</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/dashboard/profile">Profile</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid className='mt-5'>
        <Row>
          {/* Sidebar */}
          <Col md={2} className="bg-light vh-100 p-3">
            <Nav defaultActiveKey="/dashboard" className="flex-column">
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/users">Users</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/reports">Reports</Nav.Link>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col md={10} className="p-4">
            <h2>Welcome Back!</h2>
            <Outlet />
            <Row className="mt-4">
              <Col md={4}>
                <Card className="text-center shadow-sm">
                  <Card.Body>
                    <Card.Title>Total Users</Card.Title>
                    <Card.Text>1,250</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="text-center shadow-sm">
                  <Card.Body>
                    <Card.Title>Active Courses</Card.Title>
                    <Card.Text>18</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="text-center shadow-sm">
                  <Card.Body>
                    <Card.Title>Revenue</Card.Title>
                    <Card.Text>$34,200</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;