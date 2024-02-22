import { InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes, setAttributes }) {
  return (
    <div className="container mx-auto w-full px-4 xl:px-28">
      <InnerBlocks.Content />
    </div>
  );
}
