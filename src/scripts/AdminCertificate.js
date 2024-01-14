import React, { useState } from "react";
import { Spinner } from "@wordpress/components";
import { MediaUploadCheck, MediaUpload } from "@wordpress/block-editor";

function AdminCertificate() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <div className="rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white">
      <h1 className="text-xl">Hello from React!</h1>
      <Spinner />

      <button
        onClick={(e) => {
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
            console.log(attachment.url);
          });

          frame.open();
        }}
      >
        Open Media Library
      </button>

      {/* <MediaUpload
        onSelect={(media) => console.log("selected " + media.length)}
        value={1}
        render={({ open }) => (
          <button onClick={open}>Open Media Library</button>
        )}
      /> */}

      <div id="canvas_container" class="relative w-full">
        <canvas
          id="pdf-renderer"
          class="absolute  left-0 top-0 w-full border-2 border-red-700"
        ></canvas>
        <canvas
          id="drawable-canvas"
          class="absolute  left-0 top-0 w-full border-2 border-blue-700"
        ></canvas>
      </div>
    </div>
  );
}

export default AdminCertificate;
