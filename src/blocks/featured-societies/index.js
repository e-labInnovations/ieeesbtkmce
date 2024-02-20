import { registerBlockType } from "@wordpress/blocks";
import { select } from "@wordpress/data";
import "./style.scss";
import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";

const attributes = {
  content: {
    type: "String",
    source: "html",
    selector: "p",
  },
  societies: {
    type: "object",
    default: {
      ras: {
        name: "Robotic Automation Society (RAS)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      pes: {
        name: "Power Energy Society (PES)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      ias: {
        name: "Industrial Applications Society (IAS)",
        image: {},
        linkObject: {},
        bg_color: "primary-800",
      },
      ies: {
        name: "Industrial Electronics society (IES)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      cs: {
        name: "Computer Society (CS)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      wie: {
        name: "Women in Engineering (WIE)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      cass: {
        name: "Circuits and systems society(CASS)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      sight: {
        name: "Special interested group on humanitarian Technology (SIGHT)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      sps: {
        name: "Signal Processing Society (SPS)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
    },
  },
};

registerBlockType(metadata, {
  attributes,
  edit: Edit,
  save: Save,
});
