import { InnerBlocks } from "@wordpress/block-editor";
export default function save({ attributes }) {
  return (
    <section>
      <div className="faq container mx-auto my-8 flex flex-col px-4 text-center xl:px-28">
        <h2 className="py-8 font-poppins text-4xl font-normal text-primary-800">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:m-2 sm:w-2/3">
            <div className="flex w-full flex-col gap-4">
              <InnerBlocks.Content />
            </div>
          </div>
          <div className="hidden w-full sm:m-2 sm:block sm:w-1/3">
            <div className="flex h-full w-full justify-center rounded-[14px] border-[3px] border-primary-800 px-3 py-6">
              <p
                id="faq-answer"
                className="font-poppins text-base font-light text-black"
              >
                1. Vestibulum arcu velit facilisis. Nulla facilisi. Suspendisse
                euismod tortor in, etiam lacus egestas lacus phasellus praesent.
                Convallis facilisis aliquam massa cursus. Diam in aliquam
                euismod orci gravida eu ridiculus a venenatis. Amet faucibus
                tempor nisl ligula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
