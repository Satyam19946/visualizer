import React, {Component} from 'react';
import Node from "./Node.js"

// This class contains the graph array which is manipulated by
// the algorithms based on which algorithm we are using
class DisplayAlgorithm extends Component {

    constructor(props){
        super(props);

        this.state = {
            numberOfRows: 10,
            numberOfColumns: 20,
            graph: [],
            node: new Node(1,1),
            alogrithm: '',
        }
    
        var graph = []
        for(var i = 0; i < this.state.numberOfRows; i++ ){
            var currRow = []
            for (var j = 0; j < this.state.numberOfColumns; j++ ){
                const temp = new Node(i,j);
                currRow.push(temp);
            }
            graph.push(currRow);
        }

        this.state.graph = graph;

        this.clearBoard = this.clearBoard.bind(this);
        //this.createBoard = this.createBoard.bind(this);
    }

    // Create a board with the dimensions given
    // Optional - to user to change the board size
    // createBoard()

    // Make color of each node to be white.
    clearBoard() {

    }


    render() {
        return (
            <div>
                <p> This is the current Matrix = {this.state.graph.length} </p>
            </div>
        )
    }
}

export default DisplayAlgorithm;