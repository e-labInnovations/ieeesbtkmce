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
      console.log(
        "🚀 ~ file: certificates-admin.js:25 ~ attachment:",
        attachment,
      );

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
