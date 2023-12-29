import { InnerBlocks, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { title } = attributes;
  return (
    <div className="flex flex-col px-12 sm:px-12 md:px-24 xl:px-48">
      <RichText.Content
        tagName="h2"
        value={title}
        className="my-5 font-poppins text-3xl text-primary-800 sm:mb-6"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
