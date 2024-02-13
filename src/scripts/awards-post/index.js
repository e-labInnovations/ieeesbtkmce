import { registerPlugin } from "@wordpress/plugins";
import Awards_Custom_Plugin from "./awards-custom-postmeta-fields";

registerPlugin("my-custom-postmeta-plugin", {
  render() {
    return <Awards_Custom_Plugin />;
  },
});
