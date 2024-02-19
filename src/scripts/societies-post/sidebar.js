import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import { useSelect } from "@wordpress/data";
import MetaImageControl from "../../components/meta-image-control";

const Sidebar = () => {
  const postType = useSelect((select) => {
    return select("core/editor").getCurrentPostType();
  });

  if (postType !== "societies") return null; // Will only render component for post type 'societies'

  return (
    <PluginDocumentSettingPanel
      title="Society Details"
      name="meta-sidebar"
      initialOpen="true"
    >
      <MetaImageControl label="Society Logo" metaKey="society_logo" />
    </PluginDocumentSettingPanel>
  );
};

export default Sidebar;
