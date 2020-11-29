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
        this.changeToAstar = this.changeToAstar.bind(this);
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
    
    render(){
        return (
            <div>
                <p>Current Algorithm = {this.state.algorithm}</p>
                <button onClick={this.changeToDijkstra}>Dijkstra</button>
                <button onClick={this.changeToBfs}>BFS</button>
                <button onClick={this.changeToDfs}>DFS</button>
                <button onClick={this.changeToAstar}>A*</button>
            </div>
        )
    }
}

export default Pathfinder;