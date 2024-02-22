import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: "container mx-auto w-full px-4 xl:px-28",
  });
  return (
    <div {...blockProps}>
      <div className="border-1 min-h-[100px] border-dashed">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
