import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";
import "./style.scss";

const attributes = {};

registerBlockType(metadata, {
  attributes,
  edit: Edit,
  save: Save,
});
