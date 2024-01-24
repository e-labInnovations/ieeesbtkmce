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
  chapters: {
    type: "object",
    default: {
      ras: {
        name: "Robotic Automation Society (RAS)",
        image: {},
        linkObject: {},
      },
      pes: {
        name: "Power Energy Society (PES)",
        image: {},
        linkObject: {},
      },
      ias: {
        name: "Industrial Applications Society (IAS)",
        image: {},
        linkObject: {},
      },
      ies: {
        name: "Industrial Electronics society (IES)",
        image: {},
        linkObject: {},
      },
      cs: {
        name: "Computer Society (CS)",
        image: {},
        linkObject: {},
      },
      wie: {
        name: "Women in Engineering (WIE)",
        image: {},
        linkObject: {},
      },
      cass: {
        name: "Circuits and systems society(CASS)",
        image: {},
        linkObject: {},
      },
      sight: {
        name: "Special interested group on humanitarian Technology (SIGHT)",
        image: {},
        linkObject: {},
      },
      sps: {
        name: "Signal Processing Society (SPS)",
        image: {},
        linkObject: {},
      },
    },
  },
};

registerBlockType(metadata, {
  attributes,
  edit: Edit,
  save: Save,
});
