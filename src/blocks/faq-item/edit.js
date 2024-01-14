import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { Fragment, useEffect, useState } from "@wordpress/element";
import { PanelBody, TextareaControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
  const { question, answer, uid } = attributes;

  const newUid = "faq-item-a-" + clientId.substr(2, 9).replace("-", "");
  setAttributes({ uid: newUid });

  const selectedBlock = useSelect((select) =>
    select("core/block-editor").getSelectedBlock(),
  );

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedBlock && selectedBlock.clientId == clientId) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedBlock]);

  const blockProps = useBlockProps({
    className:
      "faq-item-q flex cursor-pointer flex-row items-center justify-between rounded-[14px] px-4 py-2 " +
      (isSelected
        ? "border-[3px] border-primary-800"
        : "border-[1px] border-gray-800"),
  });
  return (
    <Fragment>
      <div {...blockProps}>
        <RichText
          className="text-left font-poppins text-base font-light text-black"
          tagName="p"
          value={question}
          allowedFormats={[]}
          onChange={(question) => setAttributes({ question })}
          placeholder={__("Question...")}
        />
        <div>
          {isSelected ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 origin-center rotate-180 fill-primary-800 transition-all duration-300"
              viewBox="0 0 37 37"
            >
              <path d="M0.801331 18.5208C0.801331 8.60853 8.83759 0.572266 18.7498 0.572266C28.662 0.572266 36.6983 8.60853 36.6983 18.5208C36.6983 28.433 28.662 36.4692 18.7498 36.4692C8.83759 36.4692 0.801331 28.433 0.801331 18.5208ZM19.1511 26.4043C19.2798 26.2766 19.3822 26.1248 19.4522 25.9575C19.5223 25.7903 19.5587 25.6108 19.5595 25.4295C19.5602 25.2482 19.5252 25.0685 19.4564 24.9007C19.3877 24.7329 19.2866 24.5802 19.1588 24.4515L14.6441 19.9014H26.1708C26.537 19.9014 26.8882 19.7559 27.1471 19.497C27.406 19.2381 27.5515 18.8869 27.5515 18.5208C27.5515 18.1546 27.406 17.8034 27.1471 17.5445C26.8882 17.2856 26.537 17.1401 26.1708 17.1401H14.6441L19.1588 12.59C19.2865 12.4611 19.3876 12.3084 19.4563 12.1405C19.525 11.9726 19.5599 11.7928 19.5591 11.6114C19.5583 11.43 19.5218 11.2505 19.4516 11.0832C19.3815 10.9159 19.279 10.7641 19.1502 10.6364C19.0214 10.5087 18.8686 10.4076 18.7007 10.3389C18.5328 10.2702 18.353 10.2353 18.1716 10.2361C17.8052 10.2377 17.4545 10.3848 17.1966 10.645L10.346 17.5483C10.0893 17.8069 9.94533 18.1564 9.94533 18.5208C9.94533 18.8851 10.0893 19.2346 10.346 19.4932L17.1966 26.3965C17.3243 26.5255 17.4762 26.6281 17.6436 26.6983C17.8111 26.7685 17.9907 26.805 18.1722 26.8058C18.3538 26.8065 18.5337 26.7714 18.7016 26.7025C18.8696 26.6336 19.0223 26.5323 19.1511 26.4043Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-9 w-9 origin-center rotate-0 fill-gray-200 transition-all duration-300"
              viewBox="0 0 37 37"
            >
              <path d="M0.801331 18.5208C0.801331 8.60853 8.83759 0.572266 18.7498 0.572266C28.662 0.572266 36.6983 8.60853 36.6983 18.5208C36.6983 28.433 28.662 36.4692 18.7498 36.4692C8.83759 36.4692 0.801331 28.433 0.801331 18.5208ZM19.1511 26.4043C19.2798 26.2766 19.3822 26.1248 19.4522 25.9575C19.5223 25.7903 19.5587 25.6108 19.5595 25.4295C19.5602 25.2482 19.5252 25.0685 19.4564 24.9007C19.3877 24.7329 19.2866 24.5802 19.1588 24.4515L14.6441 19.9014H26.1708C26.537 19.9014 26.8882 19.7559 27.1471 19.497C27.406 19.2381 27.5515 18.8869 27.5515 18.5208C27.5515 18.1546 27.406 17.8034 27.1471 17.5445C26.8882 17.2856 26.537 17.1401 26.1708 17.1401H14.6441L19.1588 12.59C19.2865 12.4611 19.3876 12.3084 19.4563 12.1405C19.525 11.9726 19.5599 11.7928 19.5591 11.6114C19.5583 11.43 19.5218 11.2505 19.4516 11.0832C19.3815 10.9159 19.279 10.7641 19.1502 10.6364C19.0214 10.5087 18.8686 10.4076 18.7007 10.3389C18.5328 10.2702 18.353 10.2353 18.1716 10.2361C17.8052 10.2377 17.4545 10.3848 17.1966 10.645L10.346 17.5483C10.0893 17.8069 9.94533 18.1564 9.94533 18.5208C9.94533 18.8851 10.0893 19.2346 10.346 19.4932L17.1966 26.3965C17.3243 26.5255 17.4762 26.6281 17.6436 26.6983C17.8111 26.7685 17.9907 26.805 18.1722 26.8058C18.3538 26.8065 18.5337 26.7714 18.7016 26.7025C18.8696 26.6336 19.0223 26.5323 19.1511 26.4043Z" />
            </svg>
          )}
        </div>
      </div>

      <InspectorControls>
        <PanelBody title={"Answer"}>
          <TextareaControl
            label="Answer"
            value={answer}
            onChange={(answer) => setAttributes({ answer })}
          />
        </PanelBody>
      </InspectorControls>
    </Fragment>
  );
}
