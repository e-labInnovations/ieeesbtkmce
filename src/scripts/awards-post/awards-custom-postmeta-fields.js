import { __ } from "@wordpress/i18n";
import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import { PanelRow } from "@wordpress/components";

const Awards_Custom_Plugin = () => {
  return (
    <PluginDocumentSettingPanel
      title={__("My Custom Post meta", "txtdomain")}
      initialOpen="true"
    >
      <PanelRow>Hello there.</PanelRow>
    </PluginDocumentSettingPanel>
  );
};

export default Awards_Custom_Plugin;
