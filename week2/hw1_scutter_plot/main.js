var a_data = []
for (var i = 0; i < 30; i++) {
  x_val = Math.random() * (70) + 111
  y_val = Math.random() * (70) + 111
  a_data[a_data.length] =  [x_val, y_val, "#FF0000"];
}

var b_data = []
for (var i = 0; i < 30; i++) {
  x_val = Math.random() * (50) + 50
  y_val = Math.random() * (50) + 50
  b_data[b_data.length] = [x_val, y_val, "#0000FF"];
}
data = a_data.concat(b_data);
console.log(data);
var svg = d3.select("#viz")
            .append("svg")
            .attr("width", 300)
            .attr("height", 300);

svg.selectAll("circle")
   .data(a_data).enter()
  .append("circle")
   .attr("cx", function(d) {return d[0]})
   .attr("cy", function(d) {return d[1]})
   .attr("r", 4)
   .style("fill", function (d) {
     return d[2]
   } );

svg.selectAll("rect")
.data(b_data)
.enter().append('rect')
    .attr('x', function(d) {return d[0]})
    .attr('y', function(d) {return d[1]})
    .attr('width', 7)
    .attr('height', 7)
    .attr('rx', 1)
    .attr('ry', 1)
    .style('fill', function (d) {
      return d[2]
    } );
