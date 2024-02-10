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
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        enable-background="new 0 0 256 256"
      >
        <path
          fill="current"
          d="M120.2,72.5c-12.3,1.8-23.2,7.2-31.9,15.9c-21.9,21.9-21.9,57.3,0,79.3c26.8,26.8,72,19.7,89.4-14c11.2-21.7,7.1-47.8-10.2-65.2C155.2,76,137.3,70,120.2,72.5z M138.7,81.3c1.2,1.2,1.3,1.7,1.3,5.2v3.8l2.9,1.2c1.6,0.6,3.1,1.1,3.4,1.1c0.3,0,1.6-1.2,3-2.5c2.1-2.1,2.8-2.5,4.2-2.5c1.6,0,2.4,0.7,8.4,6.6c6.1,6.1,6.7,6.8,6.7,8.4c0,1.5-0.5,2.2-2.7,4.4l-2.7,2.7l1.3,3.3l1.3,3.2h3.9c3.5,0,4,0.1,5.2,1.3l1.3,1.4v9.3c-0.1,6.5-0.2,9.6-0.7,10.1c-1.1,1.5-2.8,2-6.2,2h-3.4l-1.2,2.9c-0.6,1.6-1.1,3.1-1.1,3.4c0,0.3,1.2,1.6,2.5,3c2.1,2.1,2.5,2.8,2.5,4.2c0,1.6-0.7,2.4-6.6,8.4c-6.1,6.1-6.8,6.7-8.4,6.7c-1.5,0-2.2-0.5-4.3-2.5c-1.4-1.4-2.7-2.5-3-2.5c-0.3,0-1.8,0.5-3.4,1.1l-3,1.1v3.9c0,3.5-0.1,4-1.3,5.2l-1.4,1.3H128h-9.4l-1.4-1.3c-1.2-1.2-1.3-1.7-1.3-5.2v-3.9l-3.2-1.3l-3.2-1.3l-2.7,2.6c-2.2,2.3-3,2.7-4.5,2.7c-1.6,0-2.4-0.7-8.4-6.6c-6.1-6.1-6.7-6.8-6.7-8.4c0-1.5,0.5-2.2,2.5-4.3c1.4-1.4,2.5-2.7,2.5-3c0-0.3-0.5-1.8-1.1-3.4l-1.2-2.9h-3.4c-3.5,0-5.1-0.5-6.2-2c-0.5-0.6-0.6-3.6-0.7-10.1v-9.3l1.3-1.4c1.2-1.2,1.7-1.3,5.2-1.3h3.8l1.3-3.2l1.3-3.2l-2.7-2.6c-2.3-2.2-2.7-3-2.7-4.5c0-1.6,0.6-2.4,6.6-8.4c6.1-6.1,6.8-6.7,8.4-6.7c1.5,0,2.2,0.5,4.3,2.5c1.4,1.4,2.7,2.5,3,2.5c0.3,0,1.8-0.5,3.4-1.1l2.9-1.2v-4c0-2.2,0.2-4.3,0.4-4.6c0.8-1.3,3.2-1.6,11.9-1.6l9.1-0.1L138.7,81.3z"
        />
      </svg>
    ),
  },
  edit: Edit,
  save: Save,
});
