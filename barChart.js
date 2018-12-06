// var data = [4, 8, 15, 16, 23, 42];

// var x = d3.scaleLinear()
// 	.domain([0, d3.max(data)])
// 	.range([0, 420]);
// console.log(x(42));

// d3.select(".chart")
// 	.selectAll("div")
// 	.data(data)
// 	.enter()
// 	.append("div")
// 	.style("width", function(d) { return x(d) + "px"; })
// 	.style('background-color', 'blue')
// 	.style('font-size', '30px')
// 	.text(function(d) { return d; });

var data = [4, 8, 15, 16, 23, 42];

var width = 420,
    barHeight = 20;

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var chart = d3.select(".chart")
	.attr("width", width)
	.attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
	.attr("width", x)
	.attr("height", barHeight - 1);

bar.append("text")
	.attr("x", function(d) { return x(d) - 3; })
	.attr("y", barHeight / 2)
	.attr("dy", ".35em")
	.text(function(d) { return d; });
