import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Pathfinder from './PathFinding/Pathfinder.js';
import HomePage from './HomePage/Home.js';
import Navbar from "./CustomNavbar/CustomNavbar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkInProgressPage from "./WorkInProgressPage/WorkInProgress.js";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Pathfinder" component={Pathfinder}/>
          <Route exact path="/Trees" component={WorkInProgressPage} />
          <Route exact path="/LinkedList" component={WorkInProgressPage} />
          <Route exact path="/Sorting" component={WorkInProgressPage} />
          <Route exact path="/Hashtables" component={WorkInProgressPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
