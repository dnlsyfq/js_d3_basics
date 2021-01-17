// d3.select("div").append("p").text("Hello World").style("color","green")

/*
d3.selectAll("div")
    .append("p")
    .text("Hello World")
    .style("color","green")

 */


const dataset = [2,4,6,8,10]

d3.select("#viz").selectAll('p').data(dataset).join('p').text((d,i) => `ID:${i} = ${d}`);