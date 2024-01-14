import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
  return (
    <section>
      <div class="w-full bg-[#F9F9F9] px-4 py-8 shadow-[inset_0_10px_10px_0px_rgba(0,0,0,0.1)]">
        <div class="counters container mx-auto flex w-full justify-between xl:px-28">
          <InnerBlocks.Content />
        </div>
      </div>
    </section>
  );
}
