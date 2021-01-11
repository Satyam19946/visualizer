import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./CustomNavbar.css";
import {HashRouter, Route, Switch} from 'react-router-dom'
import Pathfinder from '../PathFinding/Pathfinder';
import HomePage from '../HomePage/Home.js';
import WorkInProgressPage from "../WorkInProgressPage/WorkInProgress.js";
import SortingPage from "../Sorting/SortingPage";

const createdNavbar = () => {
  console.log("From custom bar", `${process.env.PUBLIC_URL}`);
  return (
    <HashRouter basename={`${process.env.PUBLIC_URL}/`}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/#/`}>Home</Navbar.Brand>
        <Nav>
          <Nav.Link href={`${process.env.PUBLIC_URL}/#/Pathfinder`}>Pathfinder</Nav.Link>
          <Nav.Link href={`${process.env.PUBLIC_URL}/#/Sorting`}>Sorting</Nav.Link>
          <Nav.Link href={`${process.env.PUBLIC_URL}/#/Trees`}>Trees</Nav.Link>
          <Nav.Link href={`${process.env.PUBLIC_URL}/#/Linkedlist`}>Linked List</Nav.Link>
          <Nav.Link href={`${process.env.PUBLIC_URL}/#/Hashtables`}>Hash Tables</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Pathfinder" component={Pathfinder}/>
        <Route exact path="/Sorting" component={SortingPage} />
        <Route exact path="/Trees" component={WorkInProgressPage} />
        <Route exact path="/LinkedList" component={WorkInProgressPage} />
        <Route exact path="/Hashtables" component={WorkInProgressPage} />
      </Switch>
    </HashRouter>
  );
} 

export default createdNavbar;