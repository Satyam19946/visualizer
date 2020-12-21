import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./CustomNavbar.css";

const createdNavbar = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav>
          <Nav.Link className="navItem" href="/Pathfinder">Pathfinder</Nav.Link>
          <Nav.Link href="/Trees">Trees</Nav.Link>
          <Nav.Link href="/LinkedList">Linked List</Nav.Link>
          <Nav.Link href="/Sorting">Sorting</Nav.Link>
          <Nav.Link href="/Hashtables">Hash Tables</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
} 

export default createdNavbar;