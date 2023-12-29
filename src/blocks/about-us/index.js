import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";

const attributes = {
  subTitle: {
    type: "String",
    source: "html",
    selector: "h3",
  },
  content: {
    type: "String",
    source: "html",
    selector: "p",
  },
  image: {
    type: "object",
  },
  linkObject: {
    type: "object",
  },
};

registerBlockType(metadata, {
  attributes,
  edit: Edit,
  save: Save,
});
