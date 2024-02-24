import { registerPlugin } from "@wordpress/plugins";
import Sidebar from "./sidebar";

registerPlugin("ieeesbtkmce-awards-plugin", {
  render() {
    return <Sidebar />;
  },
});
