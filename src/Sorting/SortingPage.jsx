import React, { useState, useEffect, useRef } from 'react';
import Element from "./Element";

function initData() {
  // no uniques.
  var myData = [];
  var numbers = [];
    for (var i = 0; myData.length < 50; i++){
      var current = Math.floor(Math.random() * 50) + 1;
      if (numbers.indexOf(current) === -1) {
        myData.push(new Element(current));
        numbers.push(current);
      }
  }
  return myData;
}


export default function SortingPage() {

  const [data, setData] = useState(initData());
  const [dataRendered, setDataRendered] = useState();
  const [currentAlgorithm, setCurrentAlgorithm] = useState("Bubble Sort");
  const [debug, setDebug] = useState(true);
  const [intervalID, setIntervalID] = useState(undefined);
  const currentIterators = useRef({i: 0, j: 0});

  useEffect(() => {
    // console.log(startData);
    var dataRender = data.map(element => {
      return <div key={element.value} style={{
        backgroundColor: element.color,
        color: "white",
        marginBottom: 3,
        marginRight: (70 - element.value) * (window.innerWidth / 100),
        height: 9,
      }}>
        { debug && element.value }
      </div>
    });
    setDataRendered(dataRender);
    return () => {
      console.log(currentIterators);
    }
  }, [data, debug]);

  
  function startSort() {
    console.log("I am called");
    setIntervalID(window.setInterval(bubbleSort, 10));
  }

  function stopSort() {
    console.log(intervalID);
    if (intervalID) {
      window.clearInterval(intervalID);
      setIntervalID(undefined);
    }
  }

  function bubbleSort() {
    let { i, j } = currentIterators.current;
    const newData = data.slice();
    if (j === newData.length - i - 1) {
      j = 0;
      i += 1;
    }
    if (i < newData.length && j < newData.length-1) {
      newData[j].color = "blue";
      newData[j + 1].color = "blue";
      if (newData[j].value > newData[j + 1].value) {
        let swap = newData[j].value;
        newData[j].value = newData[j + 1].value;
        newData[j + 1].value = swap;
      }
      setData(newData);
      currentIterators.current = { i: i, j: j+1 }
    }
  }

  return (
    <div>
      <button style={{
        marginBottom: 10,
      }}>
        Placeholder
      </button>
      <button onClick={() => setData(initData())}>
        Initialize
      </button>
      <button onClick={() => setCurrentAlgorithm("Bubble Sort")}>
        Bubble Sort
      </button>
      <button onClick={() => setCurrentAlgorithm("Insertion Sort")}>
        Insertion Sort
      </button>
      <button onClick={() => setDebug(!debug)}>
        Toggle Debug
      </button>
      <button onClick={() => startSort()}>
        Start Sort
      </button>
      <button disabled={ intervalID === undefined} onClick={() => stopSort()}>
        Stop Sort
      </button>
      {currentAlgorithm}
      {data.length}
      {dataRendered}
    </div>
  );
}