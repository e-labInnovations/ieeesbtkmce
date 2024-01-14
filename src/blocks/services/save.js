import { InnerBlocks, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { title } = attributes;
  return (
    <section>
      <div className="container mx-auto my-8 flex flex-col gap-6 px-4 xl:px-28">
        <RichText.Content
          tagName="h2"
          value={title}
          className="my-5 font-poppins text-3xl text-primary-800"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <InnerBlocks.Content />
        </div>
      </div>
    </section>
  );
}
