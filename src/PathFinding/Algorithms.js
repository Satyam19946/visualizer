import {Component} from 'react';

// Algorithms takes an algorithm name from PathFinder and the Grid from SearchGrid to execute the specified the algorithm
class Algorithms extends Component{
    
    changeColorToOrange(item){
        item.color = 'orange';
    }

    changeColorToBlue(item){
        item.color = 'blue';
    }
    
    dfsStep(grid, stackOfNodes, visited, nodesTouched){
        let destNode = grid.endNode;
        let currNode = grid.currentNode;

        visited.push(currNode);

        if ( currNode.x === destNode.x && currNode.y === destNode.y ){
            grid.endNode.color = 'pink';
            return [grid, stackOfNodes, visited, nodesTouched];
        }

        let neighbors = [];
        // Add the 4 neighbors.
        neighbors.push([currNode.x+1, currNode.y]);
        neighbors.push([currNode.x-1, currNode.y]);
        neighbors.push([currNode.x, currNode.y+1]);
        neighbors.push([currNode.x, currNode.y-1]);
        for ( let i = 0; i < neighbors.length; i++ ){
            let check = neighbors[i];
            console.log(check);
            if ( check[0] >= 0 && check[0] < grid.numberOfRows && check[1] >= 0 && check[1] < grid.numberOfColumns ){
                if ( nodesTouched.indexOf(check[0]*grid.numberOfColumns + check[1]) === -1 ){
                    let nodeToPush = grid.graph[check[0]][check[1]];
                    console.log("This node added is ", nodeToPush);
                    nodeToPush.parent = currNode;
                    stackOfNodes.push(nodeToPush);
                    nodesTouched.push(check[0]*grid.numberOfColumns + check[1]);
                }
            }
        }
        
        stackOfNodes.forEach(this.changeColorToOrange);
        visited.forEach(this.changeColorToBlue);
        if ( stackOfNodes.length >= 1 ){
            grid.currentNode = stackOfNodes.pop();
            grid.currentNode.color = 'green';
        }

        return [grid, stackOfNodes, visited, nodesTouched];
    }

    bfs(){

    }
}

export default Algorithms;