//aquí debes trabajar con datos de un JSON
<script src="https://d3js.org/d3.v5.min.js"></script>
<script>
    var url = "http://storageName.blob.core.windows.net/containerName/file.json";
d3.json(url, function (json) {
    //code here
});
var svg = d3.select("#d3").append("svg")
var w = 450;
var h = 450;
d3.select(".dataviz-segunda")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#FFFFFF");
</script>