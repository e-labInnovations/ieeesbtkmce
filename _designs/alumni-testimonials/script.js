const file = "http://ieeesbtkmce.localhost/wp-json/alumni_testimonials/v1/all";
const width = 500; //window.innerWidth;
const height = 500; //window.innerHeight;
const atSection = document.querySelector(".alumni-testimonials");
const contentEle = atSection.querySelector("#at-content");
const nameEle = atSection.querySelector("#at-name");
const batchEle = atSection.querySelector("#at-batch");

let minWidth = 0;

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
    minWidth =
      minWidth < (data.__data__.r * 1.1) / 2
        ? (data.__data__.r * 1.1) / 2
        : minWidth;

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
      return d.data.img ? `url(#pattern_${d.data.id})` : "#006EA6";
    })
    .on("mouseover", function (e, d) {
      getNeighbors(d.x, d.y, d.r, false);

      nameEle.classList.remove("hidden");
      batchEle.classList.remove("hidden");
      nameEle.innerText = d.data.name;
      batchEle.innerText = d.data.batch;
      contentEle.innerText = d.data.content;

      d3.select(this).style("stroke", "#0B567F");
      let circleRadius = d.r * 1.1 < minWidth ? minWidth : d.r * 1.1;
      //Circle radius
      d3.select(this)
        .transition()
        .ease(d3.easePolyInOut)
        .duration(200)
        .attr("r", circleRadius);
      //Image width
      d3.select("#pattern_" + d.data.id)
        .select("image")
        .transition()
        .ease(d3.easePolyInOut)
        .duration(200)
        .attr("width", 2 * circleRadius);
    })
    // .on("mousemove", (e) =>
    // //   tooltip.style("top", `${e.pageY}px`).style("left", `${e.pageX + 10}px`),
    // )
    .on("mouseout", function (e, d) {
      getNeighbors(d.x, d.y, d.r, true);
      d3.select(this).style("stroke", "none");

      nameEle.classList.add("hidden");
      batchEle.classList.add("hidden");

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
    let circleRadius = r * 1.1 < minWidth ? minWidth : r * 1.1;
    r = circleRadius + 20;
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
  function generateRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  data = await d3.json(file).then((data) => data);
  data = data.map((item) => {
    return { ...item, score: generateRandomFloat(3, 10) };
  });

  // for (let i = 0; i < 500; i++) {
  //   let b = {
  //     id:
  //       Math.random().toString(36).substring(2) +
  //       new Date().getTime().toString(36),
  //     name: "fake",
  //     score: generateRandomFloat(0.5, 1.5),
  //     content:
  //       "Gotham's a canvas of corruption, and I'm the vigilante brushstroke. No capes, no quips, just shadows and justice. One by one, the darkness falls, and dawn breaks on a safer city. That's the Batman promise.",
  //     batch: "Batch 2015-19",
  //     current_position: "CEO of Wayne Enterprises",
  //     img: false,
  //   };
  //   data.push(b);
  // }
  generateChart(data);
})();
