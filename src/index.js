import ExampleReactComponent from "./scripts/ExampleReactComponent";
import AdminCertificate from "./scripts/AdminCertificate";
import React from "react";
import ReactDOM from "react-dom";

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
