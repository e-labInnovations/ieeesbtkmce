import {
  useBlockProps,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { useSelect, select, subscribe } from "@wordpress/data";
import { useEffect, useState } from "@wordpress/element";
import "./editor.scss";

const imagesClasses = {
  default: "news-item hidden group relative",
  front: "news-front-img group relative",
  back: "news-back-img group relative",
  backHidden: "news-hidden-back-img group relative",
  frontHidden: "news-hidden-front-img group relative",
};

export default function Edit({ attributes, setAttributes, clientId }) {
  const { image, title, content, registerLink, detailsLink } = attributes;
  const [isSelected, setIsSelected] = useState(false);
  const parentClientId =
    select("core/block-editor").getBlockParents(clientId)[0];

  const activeItem = useSelect((select) => {
    const parentBlock = select("core/block-editor").getBlock(parentClientId);
    return parentBlock ? parentBlock.attributes.activeItem : null;
  });

  const parentAttributes = useSelect((select) => {
    const parentBlock = select("core/block-editor").getBlock(parentClientId);
    return parentBlock ? parentBlock.attributes : null;
  });

  useEffect(() => {
    if (parentAttributes) {
      setIsSelected(activeItem == clientId);
      if (activeItem == clientId) {
        setAttributes({
          title: parentAttributes.title,
          content: parentAttributes.content,
          registerLink: parentAttributes.registerLink,
          detailsLink: parentAttributes.detailsLink,
        });
      }
    }
  }, [parentAttributes]);

  useEffect(() => {
    setIsSelected(activeItem == clientId);
  }, [activeItem]);

  useEffect(() => {
    const selectedBlockClientId =
      select("core/block-editor").getSelectedBlockClientId();
    const selectedBlock = select("core/block-editor").getBlock(
      selectedBlockClientId,
    );
    setIsSelected(selectedBlock && selectedBlock.clientId === clientId);
  }, []);

  const blockProps = useBlockProps({
    className: isSelected ? imagesClasses.front : imagesClasses.backHidden,
  });

  return (
    <div className={isSelected ? imagesClasses.front : imagesClasses.back}>
      <svg width={0} height={0} className="hidden">
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          id="pencil-fill"
        >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
        </symbol>
      </svg>
      {image && image.url ? (
        <>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  image: {
                    id: media.id,
                    alt: media.alt || "",
                    url: media.url,
                  },
                })
              }
              allowedTypes={["image"]}
              value={image.id}
              render={({ open }) => (
                <img
                  className="h-full max-h-full rounded-xl"
                  src={image.url}
                  alt={image.alt}
                  onClick={open}
                />
              )}
            />
          </MediaUploadCheck>
        </>
      ) : (
        <MediaPlaceholder
          onSelect={(media) =>
            setAttributes({
              image: {
                id: media.id,
                alt: media.alt || "",
                url: media.url,
              },
            })
          }
          allowedTypes={["image"]}
          multiple={false}
          labels={{ title: "News Image" }}
        />
      )}
      <p
        className="hidden"
        data-title="This is a title1"
        data-details-url="/home"
        data-register-url="#"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div class="absolute -end-2 -top-2 hidden h-6  w-6 items-center justify-center rounded-full border-2 border-white bg-primary-800 p-1 text-xs font-bold text-white group-hover:inline-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-pencil-fill"
          viewBox="0 0 16 16"
        >
          <use xlinkHref="#pencil-fill" />
        </svg>
      </div>
    </div>
  );
}
