import { render } from "@wordpress/element";
import AdminEditor from "./admin-editor";

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".wp-block-post-content").innerHTML = "khjvv";
  if (document.querySelector(".wp-block-post-content")) {
    render(<AdminEditor />, document.querySelector(".wp-block-post-content"));
  }
});
