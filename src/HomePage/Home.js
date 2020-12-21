import "./Home.css";

const homePage = () => {
  return (
    <div className="intro"> 
      <p>This project contains a visualization of the common algorithms that you will probably encounter in your CSE classes.</p>
      <p> This project has been written from scratch in React. (<a href="https://reactjs.org/">Learn React Here</a>)</p>
      <p> I have used the concept of stateful classes to visualize the PathFinding Algorithms - </p>
      <br />
      <ul>
        <li> Depth First Search - Stack implementation</li>
        <li> Breadth First Search - Queue implementation </li>
        <li> Dijkstra (Uniform Cost Search) - Priority Queue implementation</li>
        <li> A* - Priority Queue implementation </li>
      </ul>
      <br />
      <p> These are the next visualization coming up in this order. </p>
      <ol>
        <li> Trees. (I plan to use functional components and <a href="https://reactjs.org/docs/hooks-intro.html">Hooks in React</a> to visualize the Trees.) </li>
        <li> Linked List </li>
        <li> Sorting Algorithms </li>
        <li> Hash Tables </li>
      </ol>
    </div>
  )
}

export default homePage;