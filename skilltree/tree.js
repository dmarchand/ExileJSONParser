



var me = this;

me.skillTree = new Graph();

// Parse json first
$.getJSON("https://dl.dropboxusercontent.com/u/52921017/treejson.js",function(result){
    $.each(result.nodes, function(i, field){
        //$("div").append(field.dn + "<br/> ");

        var node = me.skillTree.addNode(field.id);
        node.descriptiveName=field.dn;

        // Find all the effects and add to node
        $.each(field.sd, function(i, sd) {
            node.effects.push(sd);
        });

        // Find all the connected nodes so we can connect the graph later
        $.each(field.out, function(i, adj) {
            node.adjacencyIds.push(adj);
        });

        me.connectTree();
    });
});


// Magic graph connector, quite slow because it's dumb
this.connectTree = function() {
    var nodes = me.skillTree.getAllNodes();
    $.each(nodes, function (i, node) {
        $.each(node.adjacencyIds, function(i, adj) {
            var index = nodes.indexOf(adj);
            var neighbor = nodes[index];
            node.addEdge(neighbor, 0);
            console.log("Added edge: " + adj);
        });
    });
}