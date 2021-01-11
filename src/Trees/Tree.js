import TreeNode from "./TreeNode.js";
import { useState } from 'react';
import "./TreeNode.css";

const Tree = () => {
  
  var [currentTree, setCurrentTree] = useState([new TreeNode(2), new TreeNode(4), undefined]);

  var treeRendered = currentTree.map((node, index) => (
    <>
      {node !== undefined && 
        <div class="treenode" style={{margin: 2}}>
          {node.value}
        </div>
      }
      <br />
    </>
  ));

  return (
    <div>
      {treeRendered}
    </div>
  )
}
export default Tree;