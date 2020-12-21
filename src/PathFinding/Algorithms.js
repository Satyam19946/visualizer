import {Component} from 'react';

// Algorithms takes an algorithm name from PathFinder and the Grid from SearchGrid to execute the specified the algorithm
class Algorithms extends Component{
    

    changeColorToOrange(item){
        item.color = 'orange';
    }

    changeColorToBlue(item){
        item.color = 'blue';
    }
    
    dfsStep(grid, arrayOfNodes, visited, nodesTouched, currentIterations){
        let destNode = grid.endNode;
        let currNode = grid.currentNode;

        visited.push(currNode);

        if ( currNode.x === destNode.x && currNode.y === destNode.y ){
            grid.endNode.color = 'pink';
            console.log("Node found");
            return [grid, arrayOfNodes, visited, nodesTouched, currentIterations+1];
        }

        let neighbors = [];
        // Add the 4 neighbors.
        neighbors.push([currNode.x+1, currNode.y]);
        neighbors.push([currNode.x-1, currNode.y]);
        neighbors.push([currNode.x, currNode.y+1]);
        neighbors.push([currNode.x, currNode.y-1]);
        for ( let i = 0; i < neighbors.length; i++ ){
            let check = neighbors[i];
            if ( check[0] >= 0 && check[0] < grid.numberOfRows && check[1] >= 0 && check[1] < grid.numberOfColumns ){
                if ( nodesTouched.indexOf(check[0]*grid.numberOfColumns + check[1]) === -1 && grid.graph[check[0]][check[1]].weight !== Infinity){
                    let nodeToPush = grid.graph[check[0]][check[1]];
                    nodeToPush.parent = currNode;
                    arrayOfNodes.push(nodeToPush);
                    nodesTouched.push(check[0]*grid.numberOfColumns + check[1]);
                }
            }
        }
        
        arrayOfNodes.forEach(this.changeColorToOrange);
        visited.forEach(this.changeColorToBlue);
        if ( arrayOfNodes.length >= 1 ){
            grid.currentNode = arrayOfNodes.pop();
            grid.currentNode.color = 'green';
        }

        return [grid, arrayOfNodes, visited, nodesTouched, currentIterations+1];
    }

    bfsStep(grid, arrayOfNodes, visited, nodesTouched, currentIterations){
        let destNode = grid.endNode;
        let currNode = grid.currentNode;

        visited.push(currNode);

        if ( currNode.x === destNode.x && currNode.y === destNode.y ){
            grid.endNode.color = 'pink';
            return [grid, arrayOfNodes, visited, nodesTouched, currentIterations+1];
        }

        let neighbors = [];
        // Add the 4 neighbors.
        neighbors.push([currNode.x+1, currNode.y]);
        neighbors.push([currNode.x-1, currNode.y]);
        neighbors.push([currNode.x, currNode.y+1]);
        neighbors.push([currNode.x, currNode.y-1]);
        for ( let i = 0; i < neighbors.length; i++ ){
            let check = neighbors[i];
            if ( check[0] >= 0 && check[0] < grid.numberOfRows && check[1] >= 0 && check[1] < grid.numberOfColumns ){
                if ( nodesTouched.indexOf(check[0]*grid.numberOfColumns + check[1]) === -1 && grid.graph[check[0]][check[1]].weight !== Infinity){
                    let nodeToPush = grid.graph[check[0]][check[1]];
                    nodeToPush.parent = currNode;
                    arrayOfNodes.push(nodeToPush);
                    nodesTouched.push(check[0]*grid.numberOfColumns + check[1]);
                }
            }
        }
        
        arrayOfNodes.forEach(this.changeColorToOrange);
        visited.forEach(this.changeColorToBlue);
        if ( arrayOfNodes.length >= 1 ){
            grid.currentNode = arrayOfNodes.shift();
            grid.currentNode.color = 'green';
        }

        return [grid, arrayOfNodes, visited, nodesTouched, currentIterations+1];
    }

    aStarStep(grid, pqOfNodes, visited, nodesTouched, currentIterations){
        let destNode = grid.endNode;
        let currNode = grid.currentNode;
        let currentNodeWeight = 1;

        if ( pqOfNodes.size() ){
            currentNodeWeight = pqOfNodes.peek()[2];
        }

        visited.push(currNode);

        if ( currNode.x === destNode.x && currNode.y === destNode.y ){
            grid.endNode.color = 'pink';
            return [grid, pqOfNodes, visited, nodesTouched, currentIterations+1];
        }

        let neighbors = [];
        // Add the 4 neighbors.
        neighbors.push([currNode.x+1, currNode.y]);
        neighbors.push([currNode.x-1, currNode.y]);
        neighbors.push([currNode.x, currNode.y+1]);
        neighbors.push([currNode.x, currNode.y-1]);
        for ( let i = 0; i < neighbors.length; i++ ){
            let check = neighbors[i];
            if ( check[0] >= 0 && check[0] < grid.numberOfRows && check[1] >= 0 && check[1] < grid.numberOfColumns ){
                if ( nodesTouched.indexOf(check[0]*grid.numberOfColumns + check[1]) === -1 && grid.graph[check[0]][check[1]].weight !== Infinity ){
                    let nodeToPush = grid.graph[check[0]][check[1]];
                    nodeToPush.parent = currNode;
                    var weightToDest = Math.abs(nodeToPush.x - destNode.x) + Math.abs(nodeToPush.y - destNode.y);
                    pqOfNodes.push([nodeToPush, currentNodeWeight+nodeToPush.weight+weightToDest, currentNodeWeight+nodeToPush.weight]);
                    nodesTouched.push(check[0]*grid.numberOfColumns + check[1]);
                }
            }
        }
        

        pqOfNodes.forEachNode(this.changeColorToOrange);
        visited.forEach(this.changeColorToBlue);
        if ( pqOfNodes.size() ){
            grid.currentNode = pqOfNodes.pop()[0];
            grid.currentNode.color = 'green';
        }

        return [grid, pqOfNodes, visited, nodesTouched, currentIterations+1];
    }
    
    // Only difference between A* and Dijkstra is that there is no weightToDestination (heuristics) included.
    dijkstraStep(grid, pqOfNodes, visited, nodesTouched, currentIterations){
        let destNode = grid.endNode;
        let currNode = grid.currentNode;
        let currentNodeWeight = 1;

        if ( pqOfNodes.size() ){
            currentNodeWeight = pqOfNodes.peek()[1];
        }

        visited.push(currNode);

        if ( currNode.x === destNode.x && currNode.y === destNode.y ){
            grid.endNode.color = 'pink';
            return [grid, pqOfNodes, visited, nodesTouched, currentIterations+1];
        }

        let neighbors = [];
        // Add the 4 neighbors.
        neighbors.push([currNode.x+1, currNode.y]);
        neighbors.push([currNode.x-1, currNode.y]);
        neighbors.push([currNode.x, currNode.y+1]);
        neighbors.push([currNode.x, currNode.y-1]);
        for ( let i = 0; i < neighbors.length; i++ ){
            let check = neighbors[i];
            if ( check[0] >= 0 && check[0] < grid.numberOfRows && check[1] >= 0 && check[1] < grid.numberOfColumns ){
                if ( nodesTouched.indexOf(check[0]*grid.numberOfColumns + check[1]) === -1 && grid.graph[check[0]][check[1]].weight !== Infinity ){
                    let nodeToPush = grid.graph[check[0]][check[1]];
                    nodeToPush.parent = currNode;
                    pqOfNodes.push([nodeToPush, currentNodeWeight+nodeToPush.weight]);
                    nodesTouched.push(check[0]*grid.numberOfColumns + check[1]);
                }
            }
        }
        

        pqOfNodes.forEachNode(this.changeColorToOrange);
        visited.forEach(this.changeColorToBlue);
        if ( pqOfNodes.size() ){
            grid.currentNode = pqOfNodes.pop()[0];
            grid.currentNode.color = 'green';
        }

        return [grid, pqOfNodes, visited, nodesTouched, currentIterations+1];
    }
}

export default Algorithms;