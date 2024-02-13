import ExampleReactComponent from "./ExampleReactComponent";
import AdminCertificate from "./AdminCertificate";
import React from "react";
import ReactDOM from "react-dom";
import { initHamburgerMenu } from "./Menu";

if (document.querySelector("#render-react-example-here")) {
  ReactDOM.render(
    <ExampleReactComponent />,
    document.querySelector("#render-react-example-here"),
  );
}

if (document.querySelector("#ieeesbtkmce-admin-certificate-edit")) {
  ReactDOM.render(
    <AdminCertificate />,
    document.querySelector("#ieeesbtkmce-admin-certificate-edit"),
  );
}

document.addEventListener("DOMContentLoaded", () => {
  initHamburgerMenu();
});
