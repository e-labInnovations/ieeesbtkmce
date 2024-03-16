const file = "data.json";
const width = 500; //window.innerWidth;
const height = 500; //window.innerHeight;
const colors = {
  html: "#006EA6",
  css: "#006EA6",
  js: "#006EA6",
};

const generateChart = (data) => {
  const bubble = (data) =>
    d3.pack().size([width, height]).padding(20)(
      d3.hierarchy({ children: data }).sum((d) => d.score),
    );

  const svg = d3
    .select("#bubble-chart")
    // .style("width", width)
    // .style("height", height);
    .attr("viewBox", "0 0 500 500");

  const root = bubble(data);
  const tooltip = d3.select(".tooltip");

  const node = svg
    .selectAll()
    .data(root.children)
    .enter()
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  let defs = svg.append("defs");
  node._groups[0].map((data) => {
    // console.log(data.__data__.r);
    defs
      .append("pattern")
      .attr("id", "pattern_" + data.__data__.data.id)
      .attr("width", 1)
      .attr("height", 1)
      .attr("patternUnits", "objectBoundingBox")
      .append("svg:image")
      .style("opacity", 0)
      .attr("xlink:href", data.__data__.data.img)
      .attr("width", 2 * data.__data__.r)
      .style("opacity", 1);
  });

  const circle = node
    .append("circle")
    // .style("fill", (d) => colors[d.data.category])
    .attr("fill", (d) => {
      return `url(#pattern_${d.data.id})`;
    })
    .on("mouseover", function (e, d) {
      getNeighbors(d.x, d.y, d.r, false);

      //   tooltip.select("img").attr("src", d.data.img);
      //   tooltip.select("a").attr("href", d.data.link).text(d.data.name);
      //   tooltip
      //     .select("span")
      //     .attr("class", d.data.category)
      //     .text(d.data.category);
      //   tooltip.style("visibility", "visible");

      d3.select(this).style("stroke", "#0B567F");
      //Circle radius
      d3.select(this)
        .transition()
        .ease(d3.easePolyInOut)
        .duration(200)
        .attr("r", d.r * 1.1);
      //Image width
      d3.select("#pattern_" + d.data.id)
        .select("image")
        .transition()
        .ease(d3.easePolyInOut)
        .duration(200)
        .attr("width", 2 * d.r * 1.1);
    })
    // .on("mousemove", (e) =>
    // //   tooltip.style("top", `${e.pageY}px`).style("left", `${e.pageX + 10}px`),
    // )
    .on("mouseout", function (e, d) {
      getNeighbors(d.x, d.y, d.r, true);
      d3.select(this).style("stroke", "none");
      //Circle radius
      d3.select(this)
        .transition()
        .ease(d3.easeExpInOut)
        .duration(200)
        .attr("r", d.r);
      //Image width
      d3.select("#pattern_" + d.data.id)
        .select("image")
        .transition()
        .ease(d3.easeExpInOut)
        .duration(200)
        .attr("width", 2 * d.r);
      //   return tooltip.style("visibility", "hidden");
    });
  // .on("click", (e, d) => window.open(d.data.link));

  function getNeighbors(x, y, r, scaleUp) {
    r = r * 1.2 + 20;
    circle._groups[0].map((cir) => {
      let x2 = cir.__data__.x;
      let y2 = cir.__data__.y;
      let r2 = cir.__data__.r;
      var d = Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));

      if (d < r + r2 || d === r + r2) {
        // Calculate newR2 to avoid intersection or touching
        var newR2 = d - r;
        // Ensure r2 is not negative (which would make the circle disappear)
        newR2 = Math.max(newR2, 0);
        const patternId = cir.getAttribute("fill").slice(4, -1); // Remove first 4 characters and last character

        if (scaleUp) {
          //Circle radius
          d3.select(cir)
            .transition()
            .ease(d3.easeExpInOut)
            .duration(200)
            .attr("r", r2);

          //Image width
          d3.select(patternId)
            .select("image")
            .transition()
            .ease(d3.easeExpInOut)
            .duration(200)
            .attr("width", 2 * r2);
        } else {
          //Circle radius
          d3.select(cir)
            .transition()
            .ease(d3.easeExpInOut)
            .duration(200)
            .attr("r", newR2);

          //Image width
          d3.select(patternId)
            .select("image")
            .transition()
            .ease(d3.easeExpInOut)
            .duration(200)
            .attr("width", 2 * newR2);
        }
      }
    });
  }

  node
    .transition()
    .ease(d3.easeExpInOut)
    .duration(1000)
    .attr("transform", (d) => `translate(${d.x}, ${d.y})`);

  circle
    .transition()
    .ease(d3.easeExpInOut)
    .duration(1000)
    .attr("r", (d) => d.r);
};

(async () => {
  data = await d3.json(file).then((data) => data);
  generateChart(data);
})();
