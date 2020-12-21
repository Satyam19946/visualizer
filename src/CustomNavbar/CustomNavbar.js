import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./CustomNavbar.css";

const createdNavbar = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>Home</Navbar.Brand>
        <Nav>
          <Nav.Link className="navItem" href={`${process.env.PUBLIC_URL}/Pathfinder`}>Pathfinder</Nav.Link>
          <Nav.Link href={`${process.env.PUBLIC_URL}/Trees`}>Trees</Nav.Link>
          <Nav.Link href={`${process.env.PUBLIC_URL}/LinkedList`}>Linked List</Nav.Link>
          <Nav.Link href={`${process.env.PUBLIC_URL}/Sorting`}>Sorting</Nav.Link>
          <Nav.Link href={`${process.env.PUBLIC_URL}/Hashtables`}>Hash Tables</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
} 

export default createdNavbar;