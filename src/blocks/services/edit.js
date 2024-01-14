import {
  RichText,
  InnerBlocks,
  useBlockProps,
  useInnerBlocksProps,
} from "@wordpress/block-editor";
import "./editor.scss";
const { Fragment } = wp.element;
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
  const { title } = attributes;
  const blockProps = useBlockProps({
    className: "container mx-auto my-8 flex flex-col gap-6 px-4 xl:px-28",
  });

  const blockProps2 = useBlockProps({
    className:
      "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  });

  const innerBlocksProps = useInnerBlocksProps(blockProps2, {
    allowedBlocks: ["ieeesbtkmce/services-item"],
  });

  return (
    <section>
      <div {...blockProps}>
        <RichText
          className="my-5 font-poppins text-3xl text-primary-800"
          tagName="h2"
          value={title}
          allowedFormats={[]}
          onChange={(title) => setAttributes({ title })}
          placeholder={__("Heading...")}
        />
        <div {...innerBlocksProps}></div>
      </div>
    </section>
  );
}
