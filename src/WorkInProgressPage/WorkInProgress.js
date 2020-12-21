import wipImage from "../assets/workInProgress.jpg";
import "./WorkInProgress.css";

const WorkInProgressPage = () => {
  return (
    <div className="centered-div">
      <img src={wipImage} alt="Work In Progress" />
      <p> This page is currently in Production. If you want to checkout the code or would like to contribute, here is the <a href="https://github.com/satyam19946/visualizer/">Github Link</a></p>
    </div>
  );
}

export default WorkInProgressPage;