(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],{24:function(e,t,s){e.exports={grid:"SearchGrid_grid__3LqTd",Node:"SearchGrid_Node__2S4hf",Description:"SearchGrid_Description__6iyT7"}},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},48:function(e,t,s){},55:function(e,t,s){"use strict";s.r(t);var r=s(1),i=s(0),a=s.n(i),n=s(20),o=s.n(n),h=(s(38),s(39),s(31)),c=s(4),d=s(21),l=s(11),u=s(12),g=s(7),f=s(19),p=s(18),b=function(e){Object(f.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"changeColorToOrange",value:function(e){e.color="orange"}},{key:"changeColorToBlue",value:function(e){e.color="blue"}},{key:"dfsStep",value:function(e,t,s,r,i){var a=e.endNode,n=e.currentNode;if(s.push(n),n.x===a.x&&n.y===a.y)return e.endNode.color="pink",console.log("Node found"),[e,t,s,r,i+1];var o=[];o.push([n.x+1,n.y]),o.push([n.x-1,n.y]),o.push([n.x,n.y+1]),o.push([n.x,n.y-1]);for(var h=0;h<o.length;h++){var c=o[h];if(c[0]>=0&&c[0]<e.numberOfRows&&c[1]>=0&&c[1]<e.numberOfColumns&&-1===r.indexOf(c[0]*e.numberOfColumns+c[1])&&e.graph[c[0]][c[1]].weight!==1/0){var d=e.graph[c[0]][c[1]];d.parent=n,t.push(d),r.push(c[0]*e.numberOfColumns+c[1])}}return t.forEach(this.changeColorToOrange),s.forEach(this.changeColorToBlue),t.length>=1&&(e.currentNode=t.pop(),e.currentNode.color="green"),[e,t,s,r,i+1]}},{key:"bfsStep",value:function(e,t,s,r,i){var a=e.endNode,n=e.currentNode;if(s.push(n),n.x===a.x&&n.y===a.y)return e.endNode.color="pink",[e,t,s,r,i+1];var o=[];o.push([n.x+1,n.y]),o.push([n.x-1,n.y]),o.push([n.x,n.y+1]),o.push([n.x,n.y-1]);for(var h=0;h<o.length;h++){var c=o[h];if(c[0]>=0&&c[0]<e.numberOfRows&&c[1]>=0&&c[1]<e.numberOfColumns&&-1===r.indexOf(c[0]*e.numberOfColumns+c[1])&&e.graph[c[0]][c[1]].weight!==1/0){var d=e.graph[c[0]][c[1]];d.parent=n,t.push(d),r.push(c[0]*e.numberOfColumns+c[1])}}return t.forEach(this.changeColorToOrange),s.forEach(this.changeColorToBlue),t.length>=1&&(e.currentNode=t.shift(),e.currentNode.color="green"),[e,t,s,r,i+1]}},{key:"aStarStep",value:function(e,t,s,r,i){var a=e.endNode,n=e.currentNode,o=1;if(t.size()&&(o=t.peek()[2]),s.push(n),n.x===a.x&&n.y===a.y)return e.endNode.color="pink",[e,t,s,r,i+1];var h=[];h.push([n.x+1,n.y]),h.push([n.x-1,n.y]),h.push([n.x,n.y+1]),h.push([n.x,n.y-1]);for(var c=0;c<h.length;c++){var d=h[c];if(d[0]>=0&&d[0]<e.numberOfRows&&d[1]>=0&&d[1]<e.numberOfColumns&&-1===r.indexOf(d[0]*e.numberOfColumns+d[1])&&e.graph[d[0]][d[1]].weight!==1/0){var l=e.graph[d[0]][d[1]];l.parent=n;var u=Math.abs(l.x-a.x)+Math.abs(l.y-a.y);t.push([l,o+l.weight+u,o+l.weight]),r.push(d[0]*e.numberOfColumns+d[1])}}return t.forEachNode(this.changeColorToOrange),s.forEach(this.changeColorToBlue),t.size()&&(e.currentNode=t.pop()[0],e.currentNode.color="green"),[e,t,s,r,i+1]}},{key:"dijkstraStep",value:function(e,t,s,r,i){var a=e.endNode,n=e.currentNode,o=1;if(t.size()&&(o=t.peek()[1]),s.push(n),n.x===a.x&&n.y===a.y)return e.endNode.color="pink",[e,t,s,r,i+1];var h=[];h.push([n.x+1,n.y]),h.push([n.x-1,n.y]),h.push([n.x,n.y+1]),h.push([n.x,n.y-1]);for(var c=0;c<h.length;c++){var d=h[c];if(d[0]>=0&&d[0]<e.numberOfRows&&d[1]>=0&&d[1]<e.numberOfColumns&&-1===r.indexOf(d[0]*e.numberOfColumns+d[1])&&e.graph[d[0]][d[1]].weight!==1/0){var l=e.graph[d[0]][d[1]];l.parent=n,t.push([l,o+l.weight]),r.push(d[0]*e.numberOfColumns+d[1])}}return t.forEachNode(this.changeColorToOrange),s.forEach(this.changeColorToBlue),t.size()&&(e.currentNode=t.pop()[0],e.currentNode.color="green"),[e,t,s,r,i+1]}}]),s}(i.Component),j=function(){function e(t,s){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"white";Object(l.a)(this,e),this.x=t,this.y=s,this.color=r,this.parent=null,this.weight=1}return Object(u.a)(e,[{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}},{key:"getColor",value:function(){return this.color}},{key:"getParent",value:function(){return this.parent}},{key:"setColor",value:function(e){this.color=e}},{key:"setParent",value:function(e){this.parent=e}}]),e}(),m=function(e){Object(f.a)(s,e);var t=Object(p.a)(s);function s(e){var r;Object(l.a)(this,s),(r=t.call(this,e)).state={numberOfRows:20,numberOfColumns:45,graph:[[]],startNode:new j(0,0,"yellow"),currentNode:new j(0,0,"green"),endNode:new j(0,0,"red")};for(var i=[],a=0;a<r.state.numberOfRows;a++){for(var n=[],o=0;o<r.state.numberOfColumns;o++){var h=new j(a,o);n.push(h)}i.push(n)}return i[0][0].color="yellow",i[r.state.numberOfRows-1][r.state.numberOfColumns-1].color="red",r.state.graph=i,r.state.startNode=i[0][0],r.state.endNode=i[r.state.numberOfRows-1][r.state.numberOfColumns-1],r.update=r.update.bind(Object(g.a)(r)),r}return Object(u.a)(s,[{key:"update",value:function(e){console.log("UPDATING THE GRID"),this.setState(e)}}]),s}(i.Component),O=s(24),v=s.n(O),x=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e,t){return e>t};Object(l.a)(this,e),this._heap=[],this._comparator=t}return Object(u.a)(e,[{key:"heap",value:function(){return this._heap}},{key:"size",value:function(){return this._heap.length}},{key:"isEmpty",value:function(){return 0===this._heap.length}},{key:"peek",value:function(){return this._heap.length>=1?this._heap[0]:void 0}},{key:"push",value:function(e){for(var t=!1,s=0;s<this._heap.length&&!t;s++)this._heap[s][1]>e[1]&&(this._heap.splice(s,0,e),t=!0);t||this._heap.splice(this._heap.length,0,e)}},{key:"pop",value:function(){return this._heap.length>0?this._heap.shift():void 0}},{key:"empty",value:function(){this._heap=[]}},{key:"forEachNode",value:function(e){for(var t=0;t<this.size();t++)e(this._heap[t][0])}}]),e}(),k=function(e){return"DFS"===e?"Depth-First Search or DFS is a classic Path-finding Algorithm. It does not guarantee a shortest path but it guarantees that if there exists a path from the starting node to the destination, it will find it. It uses a stack in its implementation and is very useful for tree-traversals (pre/in/post) where we need to go down one entire branch before switching to the different branch. The last node that is added, is explored first in this algorithm. Both BFS and DFS do not work for weighted graphs, so we assume that every node has the same weight and that is 1.":"Dijkstra"===e?"Dijkstra is a guaranteed path finder and it finds the path with the lowest cost. A major difference between BFS/DFS and Dijkstra is that Dijkstra works for weighted paths where the cost of all nodes is not the same. Dijkstra's algorithm is named after Edsger W. Dijkstra. Using a Priority Queue in its implementation, we can find the lowest cost path from one node to all the other nodes, as a priority queue would search the nodes with the smallest cost first. In my implementation, I use min-heap to implement the priority queue.":"BFS"===e?"Breadth-First Search or BFS is a guaranteed shortest path-finder in a graph where all nodes cost the same to visit. It uses a queue in its implementation. We first visit and explore all the nodes at one level and then go upto the upper level. Since all nodes have the same cost, it can be proved using induction that all the nodes at each level have the same cost. This algorithm is used in Tree-traversals when we want to search an entire level of tree before going down to the second level. This traversal is known as level-order traversal.":'A* works like Dijkstra but uses the concept of a heuristics. A heuristics is a well-defined function which gives us an estimate of how bad/good visiting the current path might be. In this case, we use the "Manhattan Distance" between the current node and the destination to get an estimate of how good we are doing. The heuristics should be consistent for all the nodes and should not result in a decreased cost. (Manhattan distance fulfills both the conditions and is an extremely popular heuristics.'},y="gray",w="lightgray",S="black",N="white",T=function(e){Object(f.a)(s,e);var t=Object(p.a)(s);function s(e){var r;return Object(l.a)(this,s),(r=t.call(this,e)).state={algorithm:"Dijkstra",searching:!1,arrayOfNodes:[],visited:[],nodesTouched:[],pqOfNodes:new x,numberOfIterations:0},r.grid=new m,r.intervalID=void 0,r.searchAlgos=new b,r.description=k(r.state.algorithm),r.changeToDijkstra=r.changeToDijkstra.bind(Object(g.a)(r)),r.changeToBfs=r.changeToBfs.bind(Object(g.a)(r)),r.changeToDfs=r.changeToDfs.bind(Object(g.a)(r)),r.changeToAstar=r.changeToAstar.bind(Object(g.a)(r)),r.startSearch=r.startSearch.bind(Object(g.a)(r)),r.stopSearch=r.stopSearch.bind(Object(g.a)(r)),r.search=r.search.bind(Object(g.a)(r)),r.startInterval=r.startInterval.bind(Object(g.a)(r)),r.stopInterval=r.stopInterval.bind(Object(g.a)(r)),r.reset=r.reset.bind(Object(g.a)(r)),r.changeDescription=r.changeDescription.bind(Object(g.a)(r)),r.randomizeMaze=r.randomizeMaze.bind(Object(g.a)(r)),r.randomizeMaze(),r}return Object(u.a)(s,[{key:"reset",value:function(){this.setState({searching:!1,arrayOfNodes:[],visited:[],nodesTouched:[],pqOfNodes:new x,numberOfIterations:0});for(var e=0;e<this.grid.state.numberOfRows;e++)for(var t=0;t<this.grid.state.numberOfColumns;t++)1===this.grid.state.graph[e][t].weight?this.grid.state.graph[e][t].color=N:70===this.grid.state.graph[e][t].weight?(this.grid.state.graph[e][t].color=y,"BFS"!==this.state.algorithm&&"DFS"!==this.state.algorithm||(this.grid.state.graph[e][t].color=N)):30===this.grid.state.graph[e][t].weight?(this.grid.state.graph[e][t].color=w,"BFS"!==this.state.algorithm&&"DFS"!==this.state.algorithm||(this.grid.state.graph[e][t].color=N)):this.grid.state.graph[e][t].weight===1/0&&(this.grid.state.graph[e][t].color="black");this.grid.state.graph[0][0].color="yellow",this.grid.state.graph[0][0].weight=1,this.grid.state.graph[this.grid.state.numberOfRows-1][this.grid.state.numberOfColumns-1].color="red",this.grid.state.graph[this.grid.state.numberOfRows-1][this.grid.state.numberOfColumns-1].weight=1,this.grid.state.currentNode=this.grid.state.graph[0][0],this.grid.state.startNode=this.grid.state.graph[0][0],this.grid.state.endNode=this.grid.state.graph[this.grid.state.numberOfRows-1][this.grid.state.numberOfColumns-1],this.grid.update(this.grid.state),this.changeDescription()}},{key:"randomizeMaze",value:function(){for(var e=0;e<this.grid.state.numberOfRows;e++)for(var t=0;t<this.grid.state.numberOfColumns;t++)if("Dijkstra"===this.state.algorithm||"A*"===this.state.algorithm){var s=Math.random();s>.9?(this.grid.state.graph[e][t].weight=1/0,this.grid.state.graph[e][t].color=S):s>.6?(this.grid.state.graph[e][t].weight=70,this.grid.state.graph[e][t].color=y):s>.3?(this.grid.state.graph[e][t].weight=30,this.grid.state.graph[e][t].color=w):this.grid.state.graph[e][t].weight=1}else{Math.random()>.8?(this.grid.state.graph[e][t].weight=1/0,this.grid.state.graph[e][t].color=S):this.grid.state.graph[e][t].weight=1}this.reset()}},{key:"changeDescription",value:function(){this.description=k(this.state.algorithm)}},{key:"changeToDijkstra",value:function(){var e=this;this.setState({algorithm:"Dijkstra"},(function(){return e.reset()}))}},{key:"changeToBfs",value:function(){var e=this;this.setState({algorithm:"BFS"},(function(){return e.reset()}))}},{key:"changeToDfs",value:function(){var e=this;this.setState({algorithm:"DFS"},(function(){return e.reset()}))}},{key:"changeToAstar",value:function(){var e=this;this.setState({algorithm:"A*"},(function(){return e.reset()}))}},{key:"tracePathFromStartToEnd",value:function(e){for(var t=e.endNode;t.x!==e.startNode.x||t.y!==e.startNode.y;)t.color="yellow",t=t.parent;return t.color="yellow",e}},{key:"search",value:function(){if(this.state.searching){var e,t,s,r,i,a,n;if("DFS"===this.state.algorithm){var o=this.searchAlgos.dfsStep(this.grid.state,this.state.arrayOfNodes,this.state.visited,this.state.nodesTouched,this.state.numberOfIterations),h=Object(d.a)(o,5);e=h[0],t=h[1],s=h[2],r=h[3],n=h[4],this.setState({arrayOfNodes:t,visited:s,nodesTouched:r,numberOfIterations:n})}else if("BFS"===this.state.algorithm){var c=this.searchAlgos.bfsStep(this.grid.state,this.state.arrayOfNodes,this.state.visited,this.state.nodesTouched,this.state.numberOfIterations),l=Object(d.a)(c,5);e=l[0],t=l[1],s=l[2],r=l[3],n=l[4],this.setState({arrayOfNodes:t,visited:s,nodesTouched:r,numberOfIterations:n})}else if("A*"===this.state.algorithm){var u=this.searchAlgos.aStarStep(this.grid.state,this.state.pqOfNodes,this.state.visited,this.state.nodesTouched,this.state.numberOfIterations),g=Object(d.a)(u,5);e=g[0],a=g[1],s=g[2],r=g[3],n=g[4],this.setState({pqOfNodes:a,visited:s,nodesTouched:r,numberOfIterations:n})}else if("Dijkstra"===this.state.algorithm){var f=this.searchAlgos.dijkstraStep(this.grid.state,this.state.pqOfNodes,this.state.visited,this.state.nodesTouched,this.state.numberOfIterations),p=Object(d.a)(f,5);e=p[0],a=p[1],s=p[2],r=p[3],n=p[4],this.setState({pqOfNodes:a,visited:s,nodesTouched:r,numberOfIterations:n})}e.currentNode.x===this.grid.state.endNode.x&&e.currentNode.y===this.grid.state.endNode.y?(i=!1,e=this.tracePathFromStartToEnd(e)):i=!0,this.setState({searching:i}),this.grid.update(e)}}},{key:"startInterval",value:function(){this.intervalID=window.setInterval(this.search,10)}},{key:"stopInterval",value:function(){window.clearInterval(this.intervalID)}},{key:"startSearch",value:function(){var e=this;this.setState({searching:!0},(function(){return e.startInterval()}))}},{key:"stopSearch",value:function(){var e=this;this.setState({searching:!1},(function(){return e.stopInterval()}))}},{key:"render",value:function(){var e,t,s=this;e=this.state.searching?Object(r.jsx)("button",{onClick:this.stopSearch,children:"Stop Search"}):Object(r.jsx)("button",{onClick:this.stopSearch,disabled:!0,children:"Stop Search"}),t=this.state.searching?Object(r.jsx)("button",{onClick:this.startSearch,disabled:!0,children:"Start Search"}):Object(r.jsx)("button",{onClick:this.startSearch,children:"Start Search"});var i=this.grid.state.graph.map((function(e){return e.map((function(e){return Object(r.jsx)("div",{style:{backgroundColor:e.color},className:v.a.Node},e.x*s.grid.state.numberOfColumns+e.y)}))}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:this.changeToDijkstra,disabled:"Dijkstra"===this.state.algorithm,children:"Dijkstra"}),Object(r.jsx)("button",{onClick:this.changeToBfs,disabled:"BFS"===this.state.algorithm,children:"BFS"}),Object(r.jsx)("button",{onClick:this.changeToDfs,disabled:"DFS"===this.state.algorithm,children:"DFS"}),Object(r.jsx)("button",{onClick:this.changeToAstar,disabled:"A*"===this.state.algorithm,children:"A*"}),Object(r.jsx)("button",{onClick:this.reset,children:"Reset The Board"}),Object(r.jsx)("button",{onClick:this.randomizeMaze,children:"Randomize The Maze"}),t,e,Object(r.jsx)("button",{children:Object(r.jsx)("a",{href:"https://github.com/satyam19946/visualizer",children:"Github link"})}),Object(r.jsx)("div",{className:v.a.Description,children:this.description}),Object(r.jsx)("br",{}),"Black Nodes cannot be passed and act as blockers. Darker nodes are high weighted while lighter are low weighted. 'Randomize The Maze' randomly assigns each the weight to each node in the grid.",Object(r.jsx)("br",{}),"Current Node = (",this.grid.state.currentNode.x+1,",",this.grid.state.currentNode.y+1,") Destination Node = (",this.grid.state.endNode.x+1,",",this.grid.state.endNode.y+1,") Number of Iterations = ",this.state.numberOfIterations,Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:v.a.grid,children:i})})]})}}]),s}(i.Component),C=(s(40),function(){return Object(r.jsxs)("div",{className:"intro",children:[Object(r.jsx)("p",{children:"This project contains a visualization of the common algorithms that you will probably encounter in your CSE classes."}),Object(r.jsxs)("p",{children:[" This project has been written from scratch in React. (",Object(r.jsx)("a",{href:"https://reactjs.org/",children:"Learn React Here"}),")"]}),Object(r.jsxs)("p",{children:[" I have used the concept of stateful classes to visualize the PathFinding Algorithms -",Object(r.jsx)("br",{}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:" Depth First Search - Stack implementation"}),Object(r.jsx)("li",{children:" Breadth First Search - Queue implementation "}),Object(r.jsx)("li",{children:" Dijkstra (Uniform Cost Search) - Priority Queue implementation"}),Object(r.jsx)("li",{children:" A* - Priority Queue implementation "})]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:" These are the next visualization coming up in this order. "}),Object(r.jsxs)("ol",{children:[Object(r.jsxs)("li",{children:[" Trees. (I plan to use functional components and ",Object(r.jsx)("a",{href:"https://reactjs.org/docs/hooks-intro.html",children:"Hooks in React"})," to visualize the Trees.) "]}),Object(r.jsx)("li",{children:" Linked List "}),Object(r.jsx)("li",{children:" Sorting Algorithms "}),Object(r.jsx)("li",{children:" Hash Tables "})]})]})}),D=s(30),I=s(16),z=(s(41),function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(D.a,{bg:"dark",variant:"dark",children:[Object(r.jsx)(D.a.Brand,{href:"/",children:"Home"}),Object(r.jsxs)(I.a,{children:[Object(r.jsx)(I.a.Link,{className:"navItem",href:"/Pathfinder",children:"Pathfinder"}),Object(r.jsx)(I.a.Link,{href:"/Trees",children:"Trees"}),Object(r.jsx)(I.a.Link,{href:"/LinkedList",children:"Linked List"}),Object(r.jsx)(I.a.Link,{href:"/Sorting",children:"Sorting"}),Object(r.jsx)(I.a.Link,{href:"/Hashtables",children:"Hash Tables"})]})]})})}),F=(s(47),s.p+"static/media/workInProgress.c69af6f8.jpg"),B=(s(48),function(){return Object(r.jsxs)("div",{className:"centered-div",children:[Object(r.jsx)("img",{src:F,alt:"Work In Progress"}),Object(r.jsxs)("p",{children:[" This page is currently in Production. If you want to checkout the code or would like to contribute, here is the ",Object(r.jsx)("a",{href:"https://github.com/satyam19946/visualizer/",children:"Github Link"})]})]})});var _=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(z,{}),Object(r.jsx)(h.a,{children:Object(r.jsxs)(c.c,{children:[Object(r.jsx)(c.a,{exact:!0,path:"/",component:C}),Object(r.jsx)(c.a,{exact:!0,path:"/Pathfinder",component:T}),Object(r.jsx)(c.a,{exact:!0,path:"/Trees",component:B}),Object(r.jsx)(c.a,{exact:!0,path:"/LinkedList",component:B}),Object(r.jsx)(c.a,{exact:!0,path:"/Sorting",component:B}),Object(r.jsx)(c.a,{exact:!0,path:"/Hashtables",component:B})]})})]})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(_,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.67a9da6c.chunk.js.map