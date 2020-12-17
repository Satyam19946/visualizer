import {Component} from 'react';
import Node from "./Node.js";


// This class contains the graph array which is manipulated by
// the algorithms based on which algorithm we are using
// resetBoard() - Resets the board to the initial conditions.
// displayBoard() - Displays the board using SearchGrid.css
class SearchGrid extends Component {

    constructor(props){
        super(props);

        this.state = {
            numberOfRows: 20,
            numberOfColumns: 45,
            graph: [[]],
            startNode: new Node(0,0, 'yellow'),
            currentNode: new Node(0,0, 'green'),
            endNode: new Node(0,0,'red'),
        }

        let newGraph = [];
        for(let i = 0; i < this.state.numberOfRows; i++ ){
            let currRow = []
            for (let j = 0; j < this.state.numberOfColumns; j++ ){
                let temp = new Node(i,j);
                currRow.push(temp);
            }
            newGraph.push(currRow);
        }

        newGraph[0][0].color = 'yellow';
        newGraph[this.state.numberOfRows-1][this.state.numberOfColumns-1].color = 'red';

        this.state.graph = newGraph;
        this.state.startNode = newGraph[0][0];
        this.state.endNode = newGraph[this.state.numberOfRows-1][this.state.numberOfColumns-1];
        this.update = this.update.bind(this);
    }

    // Resets the board to the initial state.
    update(grid){
        console.log("UPDATING THE GRID");
        this.setState(grid);
    }
}

export default SearchGrid;