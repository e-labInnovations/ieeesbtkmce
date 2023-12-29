import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";

const attributes = {
  title: {
    type: "String",
    source: "html",
    selector: "h2",
    default: "What We Offer",
  },
};

registerBlockType(metadata, {
  attributes,
  edit: Edit,
  save: Save,
});
