const DFSDescription = "Depth-First Search or DFS is a classic Path-finding Algorithm. It does not guarantee a shortest path but it guarantees that if there exists a path from the starting node to the destination, it will find it. It uses a stack in its implementation and is very useful for tree-traversals (pre/in/post) where we need to go down one entire branch before switching to the different branch. The last node that is added, is explored first in this algorithm. Both BFS and DFS do not work for weighted graphs, so we assume that every node has the same weight and that is 1."
const DijkstraDescription = "Dijkstra is a guaranteed path finder and it finds the path with the lowest cost. A major difference between BFS/DFS and Dijkstra is that Dijkstra works for weighted paths where the cost of all nodes is not the same. Dijkstra's algorithm is named after Edsger W. Dijkstra. Using a Priority Queue in its implementation, we can find the lowest cost path from one node to all the other nodes, as a priority queue would search the nodes with the smallest cost first. In my implementation, I use min-heap to implement the priority queue.";
const BFSDescription = "Breadth-First Search or BFS is a guaranteed shortest path-finder in a graph where all nodes cost the same to visit. It uses a queue in its implementation. We first visit and explore all the nodes at one level and then go upto the upper level. Since all nodes have the same cost, it can be proved using induction that all the nodes at each level have the same cost. This algorithm is used in Tree-traversals when we want to search an entire level of tree before going down to the second level. This traversal is known as level-order traversal."
const AstarDescription = "A* works like Dijkstra but uses the concept of a heuristics. A heuristics is a well-defined function which gives us an estimate of how bad/good visiting the current path might be. In this case, we use the \"Manhattan Distance\" between the current node and the destination to get an estimate of how good we are doing. The heuristics should be consistent for all the nodes and should not result in a decreased cost. (Manhattan distance fulfills both the conditions and is an extremely popular heuristics."

// const DFSAlgorithm = "Pseudocode: stack = [stackNode]"

const getDescription = (algorithmName) => {
    if ( algorithmName === "DFS" ){
        return DFSDescription;
    } else if ( algorithmName === "Dijkstra" ){
        return DijkstraDescription;
    } else if ( algorithmName === "BFS" ){
        return BFSDescription;
    } else {
        return AstarDescription;
    }
}

export default getDescription;