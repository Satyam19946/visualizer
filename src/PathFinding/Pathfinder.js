import React, {Component} from 'react';
import Algorithms from './Algorithms.js';
import SearchGrid from './SearchGrid.js';
import styles from "./SearchGrid.module.css";
import PriorityQueue from "./PriorityQueue.js";
import getDescription from "./Description.js";

const HIGH_WEIGHTED_NODES_WEIGHT = 70;
const LOW_WEIGHTED_NODES_WEIGHT = 30;
const HIGH_WEIGHTED_NODES_COLOR = "gray";
const LOW_WEIGHTED_NODES_COLOR = "lightgray";
const UNPASSABLE_NODES_COLOR = "black";
const NO_WEIGHT_NODES_COLOR = "white";
const LEGEND = "Black Nodes cannot be passed and act as blockers. Darker nodes are high weighted and avoided while lighter are low weighted and preferred. 'Randomize The Maze' randomly assigns weight to each node in the grid."


// Pathfinder tells which algorithm we are using.
class Pathfinder extends Component {

    constructor(props){
        super(props);

        this.state = {
            algorithm: "Dijkstra",
            searching: false,
            arrayOfNodes: [],
            visited: [],
            nodesTouched: [],
            pqOfNodes: new PriorityQueue(),
            numberOfIterations: 0,
        };

        this.grid = new SearchGrid();
        this.intervalID = undefined;
        this.searchAlgos = new Algorithms();
        this.description = getDescription(this.state.algorithm);

        this.changeToDijkstra = this.changeToDijkstra.bind(this);
        this.changeToBfs = this.changeToBfs.bind(this);
        this.changeToDfs = this.changeToDfs.bind(this);
        this.changeToAstar = this.changeToAstar.bind(this);
        this.startSearch = this.startSearch.bind(this);
        this.stopSearch = this.stopSearch.bind(this);
        this.search = this.search.bind(this);
        this.startInterval = this.startInterval.bind(this);
        this.stopInterval = this.stopInterval.bind(this);
        this.reset = this.reset.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.randomizeMaze = this.randomizeMaze.bind(this);
        this.randomizeMaze();
    }

    reset(){
        this.setState({
            searching: false,
            arrayOfNodes: [],
            visited: [],
            nodesTouched: [],
            pqOfNodes: new PriorityQueue(),
            numberOfIterations: 0,
        });
        

        for(let i = 0; i < this.grid.state.numberOfRows; i++ ){
            for ( let j = 0; j < this.grid.state.numberOfColumns; j++ ){
                if ( this.grid.state.graph[i][j].weight === 1 ){
                    this.grid.state.graph[i][j].color = NO_WEIGHT_NODES_COLOR;
                } else if ( this.grid.state.graph[i][j].weight === HIGH_WEIGHTED_NODES_WEIGHT ){
                    this.grid.state.graph[i][j].color = HIGH_WEIGHTED_NODES_COLOR;
                    if (this.state.algorithm === "BFS" || this.state.algorithm === "DFS") {
                        this.grid.state.graph[i][j].color = NO_WEIGHT_NODES_COLOR;
                    }  
                } else if ( this.grid.state.graph[i][j].weight === LOW_WEIGHTED_NODES_WEIGHT ){
                    this.grid.state.graph[i][j].color = LOW_WEIGHTED_NODES_COLOR;
                    if (this.state.algorithm === "BFS" || this.state.algorithm === "DFS") {
                        this.grid.state.graph[i][j].color = NO_WEIGHT_NODES_COLOR;
                    }  
                }
                 else if ( this.grid.state.graph[i][j].weight === Infinity ){
                    this.grid.state.graph[i][j].color = 'black';
                }
            }
        }

        this.grid.state.graph[0][0].color = 'yellow';
        this.grid.state.graph[0][0].weight = 1;
        this.grid.state.graph[this.grid.state.numberOfRows-1][this.grid.state.numberOfColumns-1].color = "red";
        this.grid.state.graph[this.grid.state.numberOfRows-1][this.grid.state.numberOfColumns-1].weight = 1;
        this.grid.state.currentNode = this.grid.state.graph[0][0];
        this.grid.state.startNode = this.grid.state.graph[0][0];
        this.grid.state.endNode = this.grid.state.graph[this.grid.state.numberOfRows-1][this.grid.state.numberOfColumns-1];
        this.grid.update(this.grid.state);
        this.changeDescription();
    }

    randomizeMaze() {
        for(let i = 0; i < this.grid.state.numberOfRows; i++ ){
            for ( let j = 0; j < this.grid.state.numberOfColumns; j++ ){
                if ( this.state.algorithm === "Dijkstra" || this.state.algorithm === "A*" ){
                    let weightToAssign = Math.random();
                    if ( weightToAssign > 0.9 ){
                        this.grid.state.graph[i][j].weight = Infinity;
                        this.grid.state.graph[i][j].color = UNPASSABLE_NODES_COLOR;
                    } else if ( weightToAssign > 0.6 ) {
                        this.grid.state.graph[i][j].weight = HIGH_WEIGHTED_NODES_WEIGHT;
                        this.grid.state.graph[i][j].color = HIGH_WEIGHTED_NODES_COLOR;
                    } else if ( weightToAssign > 0.3 ) {
                        this.grid.state.graph[i][j].weight = LOW_WEIGHTED_NODES_WEIGHT;
                        this.grid.state.graph[i][j].color = LOW_WEIGHTED_NODES_COLOR;
                    } else {
                        this.grid.state.graph[i][j].weight = 1;
                    }
                } else {
                    let weightToAssign = Math.random();
                    if ( weightToAssign > 0.8 ){
                        this.grid.state.graph[i][j].weight = Infinity;
                        this.grid.state.graph[i][j].color = UNPASSABLE_NODES_COLOR;
                    } else {
                        this.grid.state.graph[i][j].weight = 1;
                    }
                }
            }
        }
        this.reset();
    }
    changeDescription(){
        this.description = getDescription(this.state.algorithm);
    }

    changeToDijkstra() {
        this.setState({
            algorithm: "Dijkstra"
        }, () => this.reset()
        );
    }

    changeToBfs() {
        this.setState({
            algorithm: "BFS"
        }, () => this.reset()
        );
    }

    changeToDfs() {
        this.setState({
            algorithm: "DFS",
        }, () => this.reset()
        );
    }

    changeToAstar(){
        this.setState({
            algorithm: "A*",
        }, ()=> this.reset()
        );
    }
    
    tracePathFromStartToEnd(grid){
        var workingNode = grid.endNode;
        while ( workingNode.x !== grid.startNode.x || workingNode.y !== grid.startNode.y ){
            workingNode.color = "yellow";
            workingNode = workingNode.parent;           
        }
        workingNode.color = "yellow";
        return grid;
    }

    search(){
        if ( this.state.searching ){
            var newGrid, newarrayOfNodes, newVisited, newNodesTouched, continueSearch, newPqOfNodes, newIterations;
            if ( this.state.algorithm === 'DFS' ){
                [newGrid, newarrayOfNodes, newVisited, newNodesTouched, newIterations] = this.searchAlgos.dfsStep(
                    this.grid.state,
                    this.state.arrayOfNodes,
                    this.state.visited,
                    this.state.nodesTouched,
                    this.state.numberOfIterations,            
                );
                this.setState({
                    arrayOfNodes: newarrayOfNodes,
                    visited: newVisited,
                    nodesTouched: newNodesTouched,
                    numberOfIterations: newIterations,
                });

            } else if ( this.state.algorithm === 'BFS' ){
                [newGrid, newarrayOfNodes, newVisited, newNodesTouched, newIterations] = this.searchAlgos.bfsStep(
                    this.grid.state,
                    this.state.arrayOfNodes,
                    this.state.visited,
                    this.state.nodesTouched,
                    this.state.numberOfIterations,
                );

                this.setState({
                    arrayOfNodes: newarrayOfNodes,
                    visited: newVisited,
                    nodesTouched: newNodesTouched,
                    numberOfIterations: newIterations,
                });

            } else if ( this.state.algorithm === "A*" ){
                [newGrid, newPqOfNodes, newVisited, newNodesTouched, newIterations] = this.searchAlgos.aStarStep(
                    this.grid.state,
                    this.state.pqOfNodes,
                    this.state.visited,
                    this.state.nodesTouched,
                    this.state.numberOfIterations,            
                );

                this.setState({
                    pqOfNodes: newPqOfNodes,
                    visited: newVisited,
                    nodesTouched: newNodesTouched,
                    numberOfIterations: newIterations,
                });
            } else if ( this.state.algorithm === "Dijkstra" ){
                [newGrid, newPqOfNodes, newVisited, newNodesTouched, newIterations] = this.searchAlgos.dijkstraStep(
                    this.grid.state,
                    this.state.pqOfNodes,
                    this.state.visited,
                    this.state.nodesTouched,
                    this.state.numberOfIterations,            
                );

                this.setState({
                    pqOfNodes: newPqOfNodes,
                    visited: newVisited,
                    nodesTouched: newNodesTouched,
                    numberOfIterations: newIterations,
                });
            }

            if ( newGrid.currentNode.x === this.grid.state.endNode.x && newGrid.currentNode.y === this.grid.state.endNode.y ){
                continueSearch = false;
                newGrid = this.tracePathFromStartToEnd(newGrid);
            } else {
                continueSearch = true;
            }
            
            this.setState({
                searching: continueSearch,
            })
            this.grid.update(newGrid);
        }
    }

    startInterval(){
        this.intervalID = window.setInterval(this.search, 10);
    }

    stopInterval(){
        window.clearInterval(this.intervalID);
    }

    startSearch() {
        this.setState({
            searching: true,
        }, () => this.startInterval(),
        );
    }

    stopSearch() {
        this.setState({
            searching: false,
        }, () => this.stopInterval(),
        );
    }

    render(){
        let stopSearchButton, startSearchButton;
        if ( this.state.searching ){
            stopSearchButton = <button onClick={this.stopSearch}>Stop Search</button>
        } else {
            stopSearchButton = <button onClick={this.stopSearch} disabled>Stop Search</button>
        }
        if ( this.state.searching ){
            startSearchButton = <button onClick={this.startSearch} disabled>Start Search</button>
        } else {
            startSearchButton = <button onClick={this.startSearch}>Start Search</button>
        }
        const gridRender = this.grid.state.graph.map(
            i => i.map(
                j => 
                <div key={j.x*this.grid.state.numberOfColumns + j.y} style={{backgroundColor: j.color}} className={styles.Node}>
                </div>
            )
        );
        
        return (
            <div>
                <button onClick={this.changeToDijkstra} disabled={this.state.algorithm === "Dijkstra"}>Dijkstra</button>
                <button onClick={this.changeToBfs} disabled={this.state.algorithm === "BFS"}>BFS</button>
                <button onClick={this.changeToDfs} disabled={this.state.algorithm === "DFS"}>DFS</button>
                <button onClick={this.changeToAstar} disabled={this.state.algorithm === "A*"}>A*</button>
                <button onClick={this.reset}>Reset The Board</button>
                <button onClick={this.randomizeMaze}>Randomize The Maze</button>
                {startSearchButton}
                {stopSearchButton}
                <button><a href="https://github.com/satyam19946/visualizer">Github link</a></button>
                <div className={styles.Description}>{this.description}</div>
                <br />
                {LEGEND}
                <br />
                Current Node = ({this.grid.state.currentNode.x+1},{this.grid.state.currentNode.y+1}) Destination Node = ({this.grid.state.endNode.x+1},{this.grid.state.endNode.y+1}) Number of Iterations = {this.state.numberOfIterations}
                <div>
                    <div className={styles.grid}>{gridRender}</div>
                </div>
            </div>
        )
    }
}

export default Pathfinder;