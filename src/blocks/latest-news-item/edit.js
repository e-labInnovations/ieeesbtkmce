import { useBlockProps } from "@wordpress/block-editor";
import { useSelect, select, subscribe } from "@wordpress/data";
import { useEffect, useState } from "@wordpress/element";
import "./editor.scss";

const imagesClasses = {
  default: "news-item hidden",
  front: "news-front-img",
  back: "news-back-img",
  backHidden: "news-hidden-back-img",
  frontHidden: "news-hidden-front-img",
};

export default function Edit({ attributes, setAttributes, clientId }) {
  const parentClientId = useSelect((select) => {
    const parentBlock =
      select("core/block-editor").getBlockParents(clientId)[0];
    return parentBlock ? parentBlock.clientId : null;
  });

  const data = select("core/block-editor").getBlock(parentClientId);

  console.log(data);

  const isSelected = useSelect(
    (select) => {
      const selectedBlockClientId =
        select("core/block-editor").getSelectedBlockClientId();
      if (!selectedBlockClientId) {
        return false;
      }
      const selectedBlock = select("core/block-editor").getBlock(
        selectedBlockClientId,
      );
      return selectedBlock.clientId === clientId;
    },
    [clientId],
  );

  const blockProps = useBlockProps({
    className: isSelected ? imagesClasses.front : imagesClasses.backHidden,
  });

  return (
    <div className={isSelected ? imagesClasses.front : imagesClasses.back}>
      <img
        src="https://picsum.photos/id/12/340/400"
        className="h-full max-h-full rounded-xl"
        alt=""
      />
      <p
        className="hidden"
        data-title="This is a title1"
        data-details-url="/home"
        data-register-url="#"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}
