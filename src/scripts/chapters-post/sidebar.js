import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import { useSelect } from "@wordpress/data";
import MetaImageControl from "../../components/meta-image-control";

const Sidebar = () => {
  const postType = useSelect((select) => {
    return select("core/editor").getCurrentPostType();
  });

  if (postType !== "chapters") return null; // Will only render component for post type 'chapters'

  return (
    <PluginDocumentSettingPanel
      title="Chapter Details"
      name="meta-sidebar"
      initialOpen="true"
    >
      <MetaImageControl label="Chapter Logo" metaKey="chapter_logo" />
    </PluginDocumentSettingPanel>
  );
};

export default Sidebar;
