

$.getJSON("https://dl.dropboxusercontent.com/u/52921017/treejson.js",function(result){
    $.each(result.nodes, function(i, field){
        $("div").append(field.dn + "<br/> ");
    });
});