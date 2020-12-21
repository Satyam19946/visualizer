import './App.css';
import Navbar from "./CustomNavbar/CustomNavbar.js"
import 'bootstrap/dist/css/bootstrap.min.css';

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
      {console.log("From custom bar 22 ", `${process.env.PUBLIC_URL}`)}
    </div>
  );
}

export default App;
