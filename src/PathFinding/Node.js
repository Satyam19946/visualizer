// Each node is a point in the graph
class Node {
    constructor(x,y,color="white"){
        this.x = x;
        this.y = y;
        this.color = color;
        this.parent = null;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getColor(){
        return this.color;
    }

    getParent(){
        return this.parent;
    }

    setColor(color){
        this.color = color;
    }

    setParent(parent){
        this.parent = parent;
    }
}

export default Node