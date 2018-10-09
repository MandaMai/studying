var g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.depthFirstSearch(0);
g.breadthFirstSearch(0);


function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
     }
    this.marked = [];
    for(var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.edgeTo = [];
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.depthFirstSearch = depthFirstSearch;
    this.breadthFirstSearch = breadthFirstSearch;
}

function addEdge(v,w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for(var i = 0; i < this.vertices; ++i) {
        console.log(i + ' -> ');
        for(var j = 0; j < this.vertices; ++j) {
            if(this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + ' ');
            }
        }
    }
}

function depthFirstSearch(v) {
    this.marked[v] = true;
    if(this.adj[v] !== undefined) {
        console.log('Visited vertex: ' + v);
    }
    for(var i = 0; i < this.adj[v].length; ++i) {
        var w = this.adj[v][i];
        if(!this.marked[w]) {
            this.depthFirstSearch(w);
        }
    }
}

function breadthFirstSearch(s) {
    console.log('BREADTH FIRST SEARCH');
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if(v !== undefined) {
            console.log('Visited vertex: ' + v);
        }
        for(var i = 0; i < this.adj[v].length; i++) {
            var w = this.adj[v][i];
            console.log(w + ' & ' + s + ' & ' + v);
            console.log(this.marked[w]);
            if(!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

