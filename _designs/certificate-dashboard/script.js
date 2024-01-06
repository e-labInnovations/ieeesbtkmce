// window.addEventListener("load", function (event) {
var url = "./template_1.pdf";

var pdfCanvas = document.getElementById("pdf-renderer");
var pdfCtx = pdfCanvas.getContext("2d");
const canvas = new fabric.Canvas("drawable-canvas");

const objectsArray = [
  {
    x: 200,
    y: 100,
    text: "Hello Fabric.js!",
    type: "text",
    fill: "#0ff000",
    fontWeight: "bold",
  },
  {
    x: 100,
    y: 300,
    width: 150,
    height: 150,
    scaleX: 0.3,
    scaleY: 0.3,
    type: "image",
    imgUrl:
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example",
  },
];

var w = null;
var h = null;

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

    canvas.setDimensions({ width: w, height: h });

    var renderTask = page.render({
      canvasContext: pdfCtx,
      viewport: viewport,
    });

    renderTask.promise.then(function () {});
  });
}

//Functions

// Function to create Fabric.js objects from the array
function createObjectsFromArray(objectsArray) {
  objectsArray.forEach((obj) => {
    let fabricObj;

    if (obj.type === "text") {
      fabricObj = new fabric.Text(obj.text, {
        left: obj.x,
        top: obj.y,
        fill: obj.fill,
        fontFamily: obj.fontFamily || "Arial", // Default to Arial if not provided
        fontSize: obj.fontSize || 16, // Default to font size 16 if not provided
        fontWeight: obj.fontWeight || "normal",
        selectable: true,
      });

      fabricObj.setControlsVisibility({
        mtr: false,
        mtr: false,
        mt: false,
        mb: false,
        mr: false,
        ml: false,
      });
    } else if (obj.type === "image") {
      fabric.Image.fromURL(obj.imgUrl, (img) => {
        fabricObj = img.set({
          left: obj.x,
          top: obj.y,
          width: obj.width,
          height: obj.height,
          scaleX: obj.scaleX,
          scaleY: obj.scaleY,
          selectable: true,
        });

        fabricObj.setControlsVisibility({
          mtr: false,
          mtr: false,
          mt: false,
          mb: false,
          mr: false,
          ml: false,
        });

        canvas.add(img);
      });
      return; // Skip adding image here as it's handled separately
    }

    // Add the object to the canvas
    canvas.add(fabricObj);
  });
}

// Add objects to canvas
createObjectsFromArray(objectsArray);

// Function to update the objectsArray with the latest canvas objects
function updateObjectsArray() {
  objectsArray.length = 0; // Clear the existing array

  canvas.forEachObject((fabricObj) => {
    let obj;
    if (fabricObj.type === "text") {
      obj = {
        x: fabricObj.left,
        y: fabricObj.top,
        text: fabricObj.text,
        type: "text",
        fill: fabricObj.fill,
        fontFamily: fabricObj.fontFamily,
        fontSize: fabricObj.fontSize * fabricObj.scaleX,
      };
    } else if (fabricObj.type === "image") {
      obj = {
        x: fabricObj.left,
        y: fabricObj.top,
        width: fabricObj.width,
        height: fabricObj.height,
        type: "image",
        imgUrl: fabricObj.getSrc(),
      };
    }

    if (obj) {
      objectsArray.push(obj);
    }
  });

  console.log("Updated objectsArray:", objectsArray);
}

// Function to export the current state of the canvas to PHP code
function exportObjectsToPHP() {
  const phpCodeArray = [];
  canvas.getObjects().forEach((obj) => {
    const phpCode = [];

    if (obj.type === "text") {
      phpCode.push(
        `$pdf->SetFont('${obj.fontFamily || "Arial"}', 'B', ${
          obj.fontSize || 16
        });`,
      );
      phpCode.push(`$pdf->SetTextColor(${hexToRgb(obj.fill)});`);
      phpCode.push(
        `$pdf->Text(${px2mm(obj.left)}, ${px2mm(
          obj.top + obj.height,
        )}, '${obj.text.replace("'", "\\'")}');`,
      );
    } else if (obj.type === "image") {
      phpCode.push(
        `$pdf->Image('${obj._originalElement.src}', ${px2mm(obj.left)}, ${px2mm(
          obj.top,
        )}, ${px2mm(obj.width * obj.scaleX)}, ${px2mm(
          obj.height * obj.scaleY,
        )}, 'PNG');`,
      );
    }

    phpCodeArray.push(phpCode.join("\n"));
  });

  const finalPHPCode = phpCodeArray.join("\n\n");
  // console.log("Exported PHP Code:\n", finalPHPCode);
  document.getElementById("php-code").innerHTML = finalPHPCode;
}

var px2mm = function (px) {
  return px * 0.3528;
};

function hexToRgb(
  hex,
  result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
) {
  return result ? result.map((i) => parseInt(i, 16)).slice(1) : null;
  //returns [23, 14, 45] -> reformat if needed
}

// Example of how to use the updateObjectsArray function
document.getElementById("export-button").addEventListener("click", () => {
  updateObjectsArray();
  exportObjectsToPHP();
});

canvas.on("object:scaling", function (event) {
  if (event.target) {
    if (event.target.type == "text") {
      let newFontSize = event.target.fontSize * event.target.scaleX;
      let activeObject = canvas.getActiveObject();

      document.getElementById("fontColor").value = event.target.fill;
      document.getElementById("fontSize").value = newFontSize.toFixed(0);
      activeObject.fontSize = newFontSize;
      activeObject.scaleX = 1;
      activeObject.scaleY = 1;
      canvas.renderAll();
    }
  }
});

canvas.on("object:selected", function (event) {
  console.log("Selected", event);
});

document.getElementById("fontSize").addEventListener("change", (e) => {
  let activeObject = canvas.getActiveObject();
  if (activeObject && activeObject.type == "text") {
    activeObject.fontSize = e.target.value;
    canvas.renderAll();
  }
});

document.getElementById("fontColor").addEventListener("change", (e) => {
  let activeObject = canvas.getActiveObject();
  if (activeObject && activeObject.type == "text") {
    activeObject.fill = e.target.value;
    canvas.renderAll();
  }
});

// canvas.on("selection:cleared", function (e) {
//   console.log(e);
// });
// // Listen for object selection and log details
// canvas.on("selection:created", (event) => {
//   console.log("Selected Object:", event.selected[0]);
// });

// console.log(JSON.stringify(canvas));
// });
