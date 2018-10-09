g = new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.showGraph();
g.breadthFirstSearch(0);
g.breadthFirstSearch(4);
g.depthFirstSearch(0);
var vertex = 4;
var source = 0;
var paths = g.pathTo(source, vertex);
g.showPath(paths);

g.vertexList = ['CS1', 'CS2', 'Data Structures', 'Assembly Language', 'Operating Systems', 'Algorithms'];
g.showGraph();
g.topSort();

function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    for(var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.marked = [];
    for(var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.breadthFirstSearch = breadthFirstSearch;
    this.depthFirstSearch = depthFirstSearch;
    this.edgeTo = [];
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    this.showPath = showPath;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
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

function breadthFirstSearch(s) {
    console.log('s: ' + s);
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while(queue.length > 0) {
        var v = queue.shift();
        if(v !== undefined) {
            console.log('Visited vertex: ' + v);
        }
        for(var i = 0; i < this.adj[v].length; ++i) {
            var w = this.adj[v][i];
            if(!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
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

function pathTo(source, v) {
    if(!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for(var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    console.log('Path test: ' + path);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}

function showPath(paths) {
    while(paths.length > 0) {
        if(paths.length > 1) {
            console.log(paths.pop() + ' - ');
        } else {
            console.log(paths.pop());
        }
    }
}

function topSort() {
    console.log('Top Sort');
    var stack = [];
    var visited = [];
    for(var i = 0; i < this.vertices; ++i) {
        visited[i] = false;
    }
    for(var i = 0; i < this.vertices; ++i) {
        if(!visited[i]) {
            this.topSortHelper(i, visited, stack);
        }
    }
    for(var i = 0; i < stack.length; ++i) {
        if(stack[i] != undefined && stack[i] != false) {
            console.log(this.vertexList[stack[i]]);
        }
    }
}

function topSortHelper(v, visited, stack) {
    visited[v] = true;
    for(var i = 0; i < this.adj[v]; ++i) {
        w = this.adj[v][i];
        if(!visited[w]) {
            this.topSortHelper(visited[w], visited, stack);
        }
    }
    stack.push(v);
}