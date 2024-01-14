import { InnerBlocks } from "@wordpress/block-editor";
export default function save({ attributes }) {
  return (
    <section>
      <div className="faq container mx-auto my-8 flex flex-col px-4 text-center xl:px-28">
        <h2 className="py-8 font-poppins text-4xl font-normal text-primary-800">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <div className="w-full sm:w-2/3">
            <div className="flex w-full flex-col gap-4">
              <InnerBlocks.Content />
            </div>
          </div>
          <div className="hidden w-full sm:block sm:w-1/3">
            <div className="flex h-full w-full justify-center rounded-[14px] border-[3px] border-primary-800 px-3 py-6">
              <p
                id="faq-answer"
                className="my-auto font-poppins text-base font-light text-black"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
