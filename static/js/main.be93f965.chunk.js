(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],{16:function(e,t,r){},17:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(2),a=r.n(s),o=r(10),i=r.n(o),c=(r(16),r(17),r(9)),h=r(3),u=r(4),l=r(1),d=r(6),f=r(5),b=function(e){Object(d.a)(r,e);var t=Object(f.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"changeColorToOrange",value:function(e){e.color="orange"}},{key:"changeColorToBlue",value:function(e){e.color="blue"}},{key:"dfsStep",value:function(e,t,r,n){var s=e.endNode,a=e.currentNode;if(r.push(a),a.x===s.x&&a.y===s.y)return e.endNode.color="pink",[e,t,r,n];var o=[];o.push([a.x+1,a.y]),o.push([a.x-1,a.y]),o.push([a.x,a.y+1]),o.push([a.x,a.y-1]);for(var i=0;i<o.length;i++){var c=o[i];if(console.log(c),c[0]>=0&&c[0]<e.numberOfRows&&c[1]>=0&&c[1]<e.numberOfColumns&&-1===n.indexOf(c[0]*e.numberOfColumns+c[1])){var h=e.graph[c[0]][c[1]];console.log("This node added is ",h),h.parent=a,t.push(h),n.push(c[0]*e.numberOfColumns+c[1])}}return t.forEach(this.changeColorToOrange),r.forEach(this.changeColorToBlue),t.length>=1&&(e.currentNode=t.pop(),e.currentNode.color="green"),[e,t,r,n]}},{key:"bfsStep",value:function(e,t,r,n){var s=e.endNode,a=e.currentNode;if(r.push(a),a.x===s.x&&a.y===s.y)return e.endNode.color="pink",[e,t,r,n];var o=[];o.push([a.x+1,a.y]),o.push([a.x-1,a.y]),o.push([a.x,a.y+1]),o.push([a.x,a.y-1]);for(var i=0;i<o.length;i++){var c=o[i];if(console.log(c),c[0]>=0&&c[0]<e.numberOfRows&&c[1]>=0&&c[1]<e.numberOfColumns&&-1===n.indexOf(c[0]*e.numberOfColumns+c[1])){var h=e.graph[c[0]][c[1]];console.log("This node added is ",h),h.parent=a,t.push(h),n.push(c[0]*e.numberOfColumns+c[1])}}return t.forEach(this.changeColorToOrange),r.forEach(this.changeColorToBlue),t.length>=1&&(e.currentNode=t.shift(),e.currentNode.color="green"),[e,t,r,n]}}]),r}(s.Component),g=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"white";Object(h.a)(this,e),this.x=t,this.y=r,this.color=n,this.parent=null}return Object(u.a)(e,[{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}},{key:"getColor",value:function(){return this.color}},{key:"getParent",value:function(){return this.parent}},{key:"setColor",value:function(e){this.color=e}},{key:"setParent",value:function(e){this.parent=e}}]),e}(),v=function(e){Object(d.a)(r,e);var t=Object(f.a)(r);function r(e){var n;Object(h.a)(this,r),(n=t.call(this,e)).state={numberOfRows:25,numberOfColumns:50,graph:[[]],startNode:new g(0,0,"yellow"),currentNode:new g(0,0,"green"),endNode:new g(0,0,"red")};for(var s=[],a=0;a<n.state.numberOfRows;a++){for(var o=[],i=0;i<n.state.numberOfColumns;i++){var c=new g(a,i);o.push(c)}s.push(o)}return s[0][0].color="yellow",s[n.state.numberOfRows-1][n.state.numberOfColumns-1].color="red",n.state.graph=s,n.state.startNode=s[0][0],n.state.endNode=s[n.state.numberOfRows-1][n.state.numberOfColumns-1],n.update=n.update.bind(Object(l.a)(n)),n}return Object(u.a)(r,[{key:"update",value:function(e){console.log("UPDATING THE GRID"),this.setState(e)}}]),r}(s.Component),O=r(8),j=r.n(O),p=function(e){Object(d.a)(r,e);var t=Object(f.a)(r);function r(e){var n;return Object(h.a)(this,r),(n=t.call(this,e)).state={algorithm:"DFS",searching:!1,stackOfNodes:[],visited:[],nodesTouched:[]},n.grid=new v,n.intervalID=void 0,n.searchAlgos=new b,n.changeToDijkstra=n.changeToDijkstra.bind(Object(l.a)(n)),n.changeToBfs=n.changeToBfs.bind(Object(l.a)(n)),n.changeToDfs=n.changeToDfs.bind(Object(l.a)(n)),n.changeToAstar=n.changeToAstar.bind(Object(l.a)(n)),n.startSearch=n.startSearch.bind(Object(l.a)(n)),n.stopSearch=n.stopSearch.bind(Object(l.a)(n)),n.search=n.search.bind(Object(l.a)(n)),n.startInterval=n.startInterval.bind(Object(l.a)(n)),n.stopInterval=n.stopInterval.bind(Object(l.a)(n)),n.reset=n.reset.bind(Object(l.a)(n)),n}return Object(u.a)(r,[{key:"reset",value:function(){this.setState({searching:!1,stackOfNodes:[],visited:[],nodesTouched:[]});for(var e=this.grid.state,t=0;t<e.numberOfRows;t++)for(var r=0;r<e.numberOfColumns;r++)this.grid.state.graph[t][r].color="white";e.graph[0][0].color="yellow",e.graph[e.numberOfRows-1][e.numberOfColumns-1].color="red",e.currentNode=e.graph[0][0],e.startNode=e.graph[0][0],e.endNode=e.graph[e.numberOfRows-1][e.numberOfColumns-1],this.grid.update(e)}},{key:"changeToDijkstra",value:function(){var e=this;this.setState({algorithm:"Dijkstra"},(function(){return e.reset()}))}},{key:"changeToBfs",value:function(){var e=this;this.setState({algorithm:"BFS"},(function(){return e.reset()}))}},{key:"changeToDfs",value:function(){var e=this;this.setState({algorithm:"DFS"},(function(){return e.reset()}))}},{key:"changeToAstar",value:function(){var e=this;this.setState({algorithm:"A*"},(function(){return e.reset()}))}},{key:"search",value:function(){if(this.state.searching){var e,t,r,n,s;if("DFS"===this.state.algorithm){var a=this.searchAlgos.dfsStep(this.grid.state,this.state.stackOfNodes,this.state.visited,this.state.nodesTouched),o=Object(c.a)(a,4);e=o[0],t=o[1],r=o[2],n=o[3]}if("BFS"===this.state.algorithm){var i=this.searchAlgos.bfsStep(this.grid.state,this.state.stackOfNodes,this.state.visited,this.state.nodesTouched),h=Object(c.a)(i,4);e=h[0],t=h[1],r=h[2],n=h[3]}s=e.currentNode.x!==this.grid.state.endNode.x||e.currentNode.y!==this.grid.state.y,this.setState({stackOfNodes:t,visited:r,nodesTouched:n,searching:s}),this.grid.update(e)}}},{key:"startInterval",value:function(){this.intervalID=window.setInterval(this.search,10)}},{key:"stopInterval",value:function(){window.clearInterval(this.intervalID)}},{key:"startSearch",value:function(){var e=this;this.setState({searching:!0},(function(){return e.startInterval()}))}},{key:"stopSearch",value:function(){var e=this;this.setState({searching:!1},(function(){return e.stopInterval()}))}},{key:"render",value:function(){var e,t,r=this;e=this.state.searching?Object(n.jsx)("button",{onClick:this.stopSearch,children:"Stop Search"}):Object(n.jsx)("button",{onClick:this.stopSearch,disabled:!0,children:"Stop Search"}),t=this.state.searching?Object(n.jsx)("button",{onClick:this.startSearch,disabled:!0,children:"Start Search"}):Object(n.jsx)("button",{onClick:this.startSearch,children:"Start Search"});var s=this.grid.state.graph.map((function(e){return e.map((function(e){return Object(n.jsx)("div",{style:{backgroundColor:e.color},className:j.a.Node},e.x*r.grid.state.numberOfColumns+e.y)}))}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["Current Algorithm = ",this.state.algorithm]}),Object(n.jsx)("button",{onClick:this.changeToDijkstra,children:"Dijkstra"}),Object(n.jsx)("button",{onClick:this.changeToBfs,children:"BFS"}),Object(n.jsx)("button",{onClick:this.changeToDfs,children:"DFS"}),Object(n.jsx)("button",{onClick:this.changeToAstar,children:"A*"}),Object(n.jsx)("button",{onClick:this.reset,children:"Reset The Board"}),t,e,Object(n.jsxs)("p",{children:[" Current Node = (",this.grid.state.currentNode.x+1,",",this.grid.state.currentNode.y+1,") Destination Node = (",this.grid.state.endNode.x+1,",",this.grid.state.endNode.y+1,") "]}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:j.a.grid,children:s})})]})}}]),r}(s.Component);var m=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(p,{})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root"))},8:function(e,t,r){e.exports={grid:"SearchGrid_grid__1Al05",Node:"SearchGrid_Node__37977"}}},[[18,1,2]]]);
//# sourceMappingURL=main.be93f965.chunk.js.map