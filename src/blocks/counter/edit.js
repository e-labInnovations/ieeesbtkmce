import {
  InnerBlocks,
  useBlockProps,
  useInnerBlocksProps,
} from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className:
      "counters container mx-auto flex w-full justify-between xl:px-28",
  });

  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    allowedBlocks: ["ieeesbtkmce/counter-item"],
  });

  return (
    <section>
      <div className="w-full bg-[#F9F9F9] px-4 py-8 shadow-[inset_0_10px_10px_0px_rgba(0,0,0,0.1)]">
        <div {...innerBlocksProps}></div>
      </div>
    </section>
  );
}
