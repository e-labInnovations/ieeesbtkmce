// window.addEventListener("load", function (event) {
var url = "./template_1.pdf";

var pdfCanvas = document.getElementById("pdf-renderer");
var drawableCanvas = document.getElementById("drawable-canvas");
var pdfCtx = pdfCanvas.getContext("2d");
var drawableCtx = drawableCanvas.getContext("2d");
const canvas = new fabric.Canvas("drawable-canvas");

var w = null;
var h = null;

let shapes = [];
let currentShapeIndex = null;
let currentShapeHoverIndex = null;
let isDragging = false;
let startX = null;
let startY = null;

shapes.push({ x: 200, y: 100, width: 50, height: 50, color: "red" });
shapes.push({ x: 100, y: 100, width: 50, height: 50, color: "blue" });

var defaultState = {
  pdf: null,
  currentPage: 1,
  zoom: 1,
};

// GET OUR PDF FILE
pdfjsLib.getDocument(url).then((pdf) => {
  defaultState.pdf = pdf;
  render();
});

// RENDER PDF DOCUMENT
function render() {
  defaultState.pdf.getPage(defaultState.currentPage).then((page) => {
    var viewport = page.getViewport(defaultState.zoom);
    w = viewport.width;
    h = viewport.height;

    pdfCanvas.width = w;
    pdfCanvas.height = h;
    // drawableCanvas.width = w;
    // drawableCanvas.height = h;
    // drawableCanvas.style.zIndex = 1;
    canvas.setDimensions({ width: w, height: h });

    var renderTask = page.render({
      canvasContext: pdfCtx,
      viewport: viewport,
    });

    renderTask.promise.then(function () {
      // drawBG(drawableCtx);
      // drawShapes(drawableCtx);
    });
  });
}

//Functions
/*
let drawBG = (context) => {
  context.save();

  context.fillStyle = "white";
  // context.fillRect(0, 0, w, h);
  context.lineWidth = 0.3;
  context.strokeStyle = "lightgray";
  context.fillStyle = "black";

  for (let i = 1; i < w; i++) {
    context.beginPath();
    if (i % 10 === 0) {
      context.moveTo(i, 0);
      context.lineTo(i, h);
      context.moveTo(i, 0);
    }
    context.closePath();
    context.stroke();
  }

  for (let i = 1; i < h; i++) {
    context.beginPath();
    if (i % 10 === 0) {
      context.moveTo(0, i);
      context.lineTo(w, i);
      context.moveTo(0, i);
    }
    context.closePath();
    context.stroke();
  }

  context.lineWidth = 1;
  context.strokeStyle = "gray";

  context.beginPath();
  for (let i = 50; i < w; i += 10) {
    if (i % 50 === 0) {
      context.moveTo(i, 0);
      context.lineTo(i, 30);
      context.fillText(` ${i}`, i, 30);
    } else {
      context.moveTo(i, 0);
      context.lineTo(i, 10);
    }
  }
  context.closePath();
  context.stroke();

  context.beginPath();
  for (let i = 50; i < h; i += 10) {
    if (i % 50 === 0) {
      context.moveTo(0, i);
      context.lineTo(30, i);
      context.fillText(` ${i}`, 30, i);
    } else {
      context.moveTo(0, i);
      context.lineTo(10, i);
    }
  }
  context.closePath();
  context.stroke();

  context.restore();
};

let drawShapes = (ctx) => {
  ctx.clearRect(0, 0, drawableCanvas.width, drawableCanvas.height);

  shapes.forEach((shape, index) => {
    ctx.fillStyle = shape.color;
    ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
    if (currentShapeHoverIndex == index) {
      ctx.setLineDash([10, 5, 30, 5]);
      ctx.beginPath();
      ctx.moveTo(shape.x, shape.y);
      ctx.lineTo(0, shape.y);
      ctx.moveTo(shape.x, shape.y);
      ctx.lineTo(shape.x, 0);
      ctx.moveTo(shape.x, shape.y);
      ctx.closePath();
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = shape.color;
      ctx.stroke();
    }
  });
};

let isMouseInShape = (x, y, shape) => {
  let shapeL = shape.x;
  let shapeR = shape.x + shape.width;
  let shapeT = shape.y;
  let shapeB = shape.y + shape.height;

  return x > shapeL && x < shapeR && y > shapeT && y < shapeB;
};

drawableCanvas.addEventListener("mousedown", function (e) {
  // console.log(e);
  e.preventDefault();

  startX = e.offsetX;
  startY = e.offsetY;

  shapes.forEach((shape, index) => {
    if (isMouseInShape(startX, startY, shape)) {
      currentShapeIndex = index;
      isDragging = true;
      return;
    }
  });
});

drawableCanvas.addEventListener("mouseup", function (e) {
  if (!isDragging) {
    return;
  }

  e.preventDefault();
  isDragging = false;
});

drawableCanvas.addEventListener("mouseout", function (e) {
  if (!isDragging) {
    return;
  }

  e.preventDefault();
  isDragging = false;
});

drawableCanvas.addEventListener("mousemove", function (e) {
  e.preventDefault();
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;

  if (isDragging) {
    let dx = mouseX - startX;
    let dy = mouseY - startY;

    shapes[currentShapeIndex].x += dx;
    shapes[currentShapeIndex].y += dy;

    drawShapes(drawableCtx);
    startX = mouseX;
    startY = mouseY;
  }

  let newCurrentShapeHoverIndex = null;
  shapes.forEach((shape, index) => {
    if (isMouseInShape(mouseX, mouseY, shape)) {
      newCurrentShapeHoverIndex = index;
    }
  });

  if (currentShapeHoverIndex != newCurrentShapeHoverIndex) {
    currentShapeHoverIndex = newCurrentShapeHoverIndex;
    drawShapes(drawableCtx);
  }

  // console.log(rect);
});
drawableCanvas.addEventListener("mouseleave", function (e) {});
*/

// Add text
const text = new fabric.Text("Mohammed Ashad", {
  left: 200,
  top: 100,
  fill: "green",
  selectable: true,
});

// Add an image
fabric.Image.fromURL(
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example",
  (img) => {
    let qrImg = img.set({
      left: 400,
      top: 50,
      width: 150,
      height: 150,
      selectable: true,
    });
    canvas.add(img);
    qrImg.setControlsVisibility({
      mtr: false,
      mtr: false,
      mt: false,
      mb: false,
      mr: false,
      ml: false,
    });
  },
);

// Add objects to canvas
canvas.add(text);

// text.controls = {
//   ...fabric.Text.prototype.controls,
//   mtr: new fabric.Control({ visible: false }),
//   mr: new fabric.Control({ visible: false }),
//   ml: new fabric.Control({ visible: false }),
//   mt: new fabric.Control({ visible: false }),
//   mb: new fabric.Control({ visible: false }),
// };

text.setControlsVisibility({
  mtr: false,
  mtr: false,
  mt: false,
  mb: false,
  mr: false,
  ml: false,
});

// Listen for object selection and log details
canvas.on("selection:created", (event) => {
  console.log("Selected Object:", event.target);
});
// });
