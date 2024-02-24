import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";

const attributes = {};

registerBlockType(metadata, {
  attributes,
  icon: {
    src: (
      <svg>
        <use xlinkHref="/icons.svg#icon-award-star" />
      </svg>
    ),
  },
  edit: Edit,
  save: Save,
});
