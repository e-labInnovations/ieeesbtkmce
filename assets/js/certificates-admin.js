jQuery(document).ready(function ($) {
  // Set the ID of the custom meta field where you'll store the file URL
  var customFieldId = "certificate_template";

  // Trigger the media uploader when the "Upload Certificate Template" button is clicked
  $("#plupload-browse-button").on("click", function (e) {
    e.preventDefault();

    var frame = wp.media({
      title: "Select or Upload Certificate Template",
      button: {
        text: "Use this template",
      },
      multiple: false,
      uploader: {
        type: "application/pdf",
      },
      library: {
        type: "application/pdf",
      },
    });

    frame.on("select", function () {
      var attachment = frame.state().get("selection").first().toJSON();

      if (attachment.mime != "application/pdf") {
        // Set error message
        const err_msg =
          "Filetype " +
          attachment.mime +
          " is not supported. Please select an PDF file.";
        $("div.updated, div.error")
          .not(".below-h2, .inline")
          .insertAfter($("div.wrap h2:first"));

        showError(err_msg);
        return;
      }

      $("#" + customFieldId).val(attachment.name);
      doPDF(attachment.url);
    });

    frame.open();
  });

  // Function to display an error message
  function showError(message) {
    var errorDiv = $(`
    <div id="message" class="notice is-dismissible error">
        <p>${message}</p>
        <button type="button" class="notice-dismiss">
            <span class="screen-reader-text">Dismiss this notice.</span>
        </button>
    </div>`);

    $(".wrap h1").after(errorDiv);

    $(".notice-dismiss").on("click", function () {
      errorDiv.remove();
    });
  }
});

function doPDF(url) {
  // var url = "./template_1.pdf";

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
      x: 10,
      y: 30,
      width: 150,
      height: 150,
      scaleX: 0.3,
      scaleY: 0.3,
      type: "image",
      imgUrl:
        // "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=http%3A%2F%2Fwww.google.com%2F&choe=UTF-8",
        // "http://chart.apis.google.com/chart?cht=qr&chs=150x150&chld=L|0&chl=http://localhost/wp-sandbox/?p=6164",
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://elabins.com",
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
      var desiredWidth = parseFloat(
        document.getElementById("canvas_container").offsetWidth,
      );
      defaultState.zoom = desiredWidth / viewport.width;
      var scaledViewport = page.getViewport(defaultState.zoom);

      w = scaledViewport.width;
      h = scaledViewport.height;

      pdfCanvas.width = w;
      pdfCanvas.height = h;

      canvas.setDimensions({ width: w, height: h });

      var renderTask = page.render({
        canvasContext: pdfCtx,
        viewport: scaledViewport,
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
        fabricObj.borderColor = "#df4b26";
        fabricObj.cornerColor = "#df4b26";
        fabricObj.cornerStrokeColor = "#df4b26";
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

          fabricObj.borderColor = "#df4b26";
          fabricObj.cornerColor = "#df4b26";
          fabricObj.cornerStrokeColor = "#df4b26";
          fabricObj.cornerStyle2 = "circle";

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
          `$pdf->Image('${obj._originalElement.src}', ${px2mm(
            obj.left,
          )}, ${px2mm(obj.top)}, ${px2mm(obj.width * obj.scaleX)}, ${px2mm(
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
  document.getElementById("export-button").addEventListener("click", (e) => {
    e.preventDefault();
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

  canvas.on("object:moving", function (event) {
    const activeObject = event.target;
    const activeObjectDetails = {
      top: activeObject.top,
      left: activeObject.left,
      right: activeObject.left + activeObject.width * activeObject.scaleX,
      bottom: activeObject.top + activeObject.height * activeObject.scaleY,
      width: activeObject.width * activeObject.scaleX,
      height: activeObject.height * activeObject.scaleY,
    };
    // right
    if (activeObjectDetails.right >= canvas.width) {
      activeObject.set({
        left: canvas.width - activeObjectDetails.width,
      });
    }
    // left
    if (activeObjectDetails.left <= 0) {
      activeObject.set({
        left: 0,
      });
    }
    // bottom
    if (activeObjectDetails.bottom >= canvas.height) {
      activeObject.set({
        top: canvas.height - activeObjectDetails.height,
      });
    }
    // Top
    if (activeObjectDetails.top <= 0) {
      activeObject.set({
        top: 0,
      });
    }
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
}
