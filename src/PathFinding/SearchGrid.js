import React, {Component} from 'react';
import Node from "./Node.js"
import styles from "./SearchGrid.module.css"


// This class contains the graph array which is manipulated by
// the algorithms based on which algorithm we are using
// resetBoard() - Resets the board to the initial conditions.
// displayBoard() - Displays the board using SearchGrid.css
class SearchGrid extends Component {

    constructor(props){
        super(props);

        this.state = {
            numberOfRows: 15,
            numberOfColumns: 20,
            graph: [[]],
            startNode: new Node(0,0, 'yellow'),
            endNode: new Node(14,19,'red'),
        }

        this.resetBoard = this.resetBoard.bind(this);
    }

    componentDidMount(){
        this.resetBoard();
    }

    // Resets the board to the initial state.
    resetBoard() {
        let newGraph = [];
        for(let i = 0; i < this.state.numberOfRows; i++ ){
            let currRow = []
            for (let j = 0; j < this.state.numberOfColumns; j++ ){
                const temp = new Node(i,j);
                currRow.push(temp);
            }
            newGraph.push(currRow);
        }

        newGraph[0][0].color = "yellow";
        newGraph[this.state.numberOfRows-1][this.state.numberOfColumns-1].color = "red";

        this.setState({
            graph: newGraph,
            startNode: newGraph[0][0],
            endNode: newGraph[this.state.numberOfRows-1][this.state.numberOfColumns-1],
        });
    }

    // Displays the Board. (Called whenever the state is changed)
    displayBoard(){
        
    }

    render() {
        const height = this.state.graph.length;
        const width = this.state.graph[0].length;
        const gridRender = this.state.graph.map(
            i => i.map(
            j => <div style={{backgroundColor: j.color}} className={styles.Node}></div>
            )
        )
        return (
            <div>
                <button onClick={this.resetBoard}>Reset The Board </button>
                <p> Width of Grid = {width} </p>
                <p> Height of Grid = {height} </p>
                <div className={styles.grid}>{gridRender}</div>
            </div>
        )
    }
}

export default SearchGrid;