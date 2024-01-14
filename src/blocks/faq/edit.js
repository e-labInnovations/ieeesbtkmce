import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { useEffect, useState } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const selectedBlock = useSelect((select) =>
    select("core/block-editor").getSelectedBlock(),
  );

  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (selectedBlock && selectedBlock.name == "ieeesbtkmce/faq-item") {
      setAnswer(
        selectedBlock.attributes.answer ? selectedBlock.attributes.answer : "",
      );
    }
  }, [selectedBlock]);

  const blockProps = useBlockProps();

  const blockProps2 = useBlockProps({
    className: "flex w-full flex-col gap-4",
  });

  const innerBlocksProps = useInnerBlocksProps(blockProps2, {
    allowedBlocks: ["ieeesbtkmce/faq-item"],
  });

  return (
    <section {...blockProps}>
      <div className="faq container mx-auto my-8 flex flex-col px-4 text-center xl:px-28">
        <h2 className="py-8 font-poppins text-4xl font-normal text-primary-800">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:m-2 sm:w-2/3">
            <div {...innerBlocksProps}></div>
          </div>
          <div className="hidden w-full sm:m-2 sm:block sm:w-1/3">
            <div className="flex h-full w-full justify-center rounded-[14px] border-[3px] border-primary-800 px-3 py-6">
              <p
                id="faq-answer"
                className="font-poppins text-base font-light text-black"
              >
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
