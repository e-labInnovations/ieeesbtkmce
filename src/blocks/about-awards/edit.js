import { useBlockProps } from "@wordpress/block-editor";
import ServerSideRender from "@wordpress/server-side-render";
import metadata from "./block.json";
import "./editor.scss";

const Placeholder = () => {
  return (
    <div className="bg-gray-200 p-4 text-center">
      <p className="text-xl font-semibold text-gray-800">Awards Placeholder</p>
    </div>
  );
};

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  return (
    <div {...blockProps}>
      <ServerSideRender
        block={metadata.name}
        LoadingResponsePlaceholder={Placeholder}
      />
    </div>
  );
}
