import React, {Component} from 'react';

// Pathfinder tells which algorithm we are using.

class Pathfinder extends Component {

    constructor(props){
        super(props);

        this.state = {
            algorithm: "dfs"
        };

        this.changeToDijkstra = this.changeToDijkstra.bind(this);
        this.changeToBfs = this.changeToBfs.bind(this);
        this.changeToDfs = this.changeToDfs.bind(this);
    }

    changeToDijkstra() {
        this.setState({algorithm: "dijkstra"});
    }

    changeToBfs() {
        this.setState({algorithm: "bfs"});
    }

    changeToDfs() {
        this.setState({algorithm: "dfs"});
    }

    render(){
        return (
            <div>
                <p>Current Algorithm = {this.state.algorithm}</p>
                <button onClick={this.changeToDijkstra}>Dijkstra</button>
                <button onClick={this.changeToBfs}>BFS</button>
                <button onClick={this.changeToDfs}>DFS</button>
            </div>
        )
    }
}

export default Pathfinder;