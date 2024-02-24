import { registerPlugin } from "@wordpress/plugins";
import Metabox from "./metabox";

registerPlugin("ieeesbtkmce-awards-plugin", {
  render() {
    return <Metabox />;
  },
});
