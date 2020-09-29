var a_data = []
for (var i = 0; i < 30; i++) {
  x_val = Math.random() * (70) + 111
  y_val = Math.random() * (70) + 111
  a_data[a_data.length] =  [x_val, y_val, "#69b3a2"];
}

var b_data = []
for (var i = 0; i < 30; i++) {
  x_val = Math.random() * (50) + 50
  y_val = Math.random() * (50) + 50
  b_data[b_data.length] = [x_val, y_val, "#cccccc"];
}
data = a_data.concat(b_data);
console.log(data);
var svg = d3.select("#viz")
            .append("svg")
            .attr("width", 300)
            .attr("height", 300);

svg.selectAll("circle")
   .data(data).enter()
  .append("circle")
   .attr("cx", function(d) {return d[0]})
   .attr("cy", function(d) {return d[1]})
   .attr("r", 4)
   .style("fill", function (d) {
     return d[2]
   } );
