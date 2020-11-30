import React, {Component} from 'react';
import Algorithms from './Algorithms.js';
import SearchGrid from './SearchGrid.js';
import styles from "./SearchGrid.module.css"


// Pathfinder tells which algorithm we are using.
class Pathfinder extends Component {

    constructor(props){
        super(props);

        this.state = {
            algorithm: "DFS",
            searching: false,
            stackOfNodes: [],
            visited: [],
            nodesTouched: [],
        };

        this.grid = new SearchGrid();
        this.intervalID = undefined;
        this.searchAlgos = new Algorithms();

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
    }

    reset(){
        this.setState({
            searching: false,
            stackOfNodes: [],
            visited: [],
            nodesTouched: [],
        });
        
        let copyGrid = this.grid.state;
        for(let i = 0; i < copyGrid.numberOfRows; i++ ){
            for ( let j = 0; j < copyGrid.numberOfColumns; j++ ){
                this.grid.state.graph[i][j].color = 'white';
            }
        }

        copyGrid.graph[0][0].color = 'yellow';
        copyGrid.graph[copyGrid.numberOfRows-1][copyGrid.numberOfColumns-1].color = "red";
        copyGrid.currentNode = copyGrid.graph[0][0];
        copyGrid.startNode = copyGrid.graph[0][0];
        copyGrid.endNode = copyGrid.graph[copyGrid.numberOfRows-1][copyGrid.numberOfColumns-1];
        this.grid.update(copyGrid);
    }

    changeToDijkstra() {
        this.setState({
            algorithm: "Dijkstra"
        });
    }

    changeToBfs() {
        this.setState({
            algorithm: "BFS"
        });
    }

    changeToDfs() {
        this.setState({
            algorithm: "DFS",
        });
    }

    changeToAstar(){
        this.setState({
            algorithm: "A*",
        });
    }
    
    search(){
        if ( this.state.searching ){
            var [newGrid, newStackOfNodes, newVisited, newNodesTouched] = this.searchAlgos.dfsStep(
                this.grid.state,
                this.state.stackOfNodes,
                this.state.visited,
                this.state.nodesTouched            
            );
            this.setState({
                stackOfNodes: newStackOfNodes,
                visited: newVisited,
                nodesTouched: newNodesTouched,
            });
            this.grid.update(newGrid);
        }
    }

    startInterval(){
        this.intervalID = window.setInterval(this.search, 100);
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
        let stopSearchButton;
        if ( this.state.searching ){
            stopSearchButton = <button onClick={this.stopSearch}>Stop Search</button>
        } else {
            stopSearchButton = <button onClick={this.stopSearch} disabled>Stop Search</button>
        }
        let startSearchButton;
        if ( this.state.searching ){
            startSearchButton = <button onClick={this.startSearch} disabled>Start Search</button>
        } else {
            startSearchButton = <button onClick={this.startSearch}>Start Search</button>
        }
        const gridRender = this.grid.state.graph.map(
            i => i.map(
            j => <div key={j.x*this.grid.state.numberOfColumns + j.y} style={{backgroundColor: j.color}} className={styles.Node}>        
                </div>
            )
        );
        return (
            <div>
                <p>Current Algorithm = {this.state.algorithm}</p>
                <button onClick={this.changeToDijkstra}>Dijkstra</button>
                <button onClick={this.changeToBfs}>BFS</button>
                <button onClick={this.changeToDfs}>DFS</button>
                <button onClick={this.changeToAstar}>A*</button>
                <button onClick={this.reset}>Reset The Board</button>
                {startSearchButton}
                {stopSearchButton}
                <div>
                    <div className={styles.grid}>{gridRender}</div>
                </div>
            </div>
        )
    }
}

export default Pathfinder;