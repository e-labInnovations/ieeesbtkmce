import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
  return (
    <div className="counters flex w-full flex-wrap justify-around bg-[#F9F9F9] px-3 py-10 shadow-[inset_0_10px_10px_0px_rgba(0,0,0,0.1)] sm:px-4 sm:py-12 md:px-6 lg:px-8 lg:py-14 xl:px-10 xl:py-16">
      <InnerBlocks.Content />
    </div>
  );
}
