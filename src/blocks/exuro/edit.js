import {
  RichText,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
  __experimentalLinkControl as LinkControl,
  useBlockProps,
} from "@wordpress/block-editor";
import { Popover, Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { content, image, linkObject } = attributes;
  const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);
  const blockProps = useBlockProps();

  return (
    <section {...blockProps}>
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

      <div className="container mx-auto my-8 flex flex-col-reverse px-4 sm:flex-row md:my-16 xl:px-28">
        <div className="mt-6 flex w-full flex-col gap-6 sm:mt-0 sm:w-1/2">
          <h2 className="hidden font-poppins text-3xl text-primary-800 sm:block">
            EXURO
          </h2>
          <RichText
            className="font-poppins text-base font-light text-black"
            tagName="p"
            value={content}
            onChange={(content) => setAttributes({ content })}
            placeholder={"Content..."}
          />
          <div className="mt-auto flex flex-row">
            <a
              onClick={() => setIsLinkPickerVisible((prev) => !prev)}
              className="group relative rounded p-2 px-5 text-center text-primary-800 no-underline outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400"
            >
              View Last Year EXURO
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
            </a>
          </div>

          {isLinkPickerVisible && (
            <Popover
              position="middle center"
              onFocusOutside={() => setIsLinkPickerVisible(false)}
            >
              <LinkControl
                settings={[]}
                value={linkObject}
                onChange={(newLink) => setAttributes({ linkObject: newLink })}
                style={{ display: "block", width: "80%" }}
              />
              <Button
                variant="primary"
                onClick={() => setIsLinkPickerVisible(false)}
                style={{ display: "block", width: "100%" }}
              >
                Confirm Link
              </Button>
            </Popover>
          )}
        </div>
        <div className="flex w-full flex-col sm:w-1/2 sm:pl-14">
          <h2 className="mb-5 font-poppins text-3xl text-primary-800 sm:mb-6 sm:hidden">
            EXURO
          </h2>
          <div className="group relative flex h-full max-h-full w-full items-center justify-center">
            {image && image.url ? (
              <>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) =>
                      setAttributes({
                        image: {
                          id: media.id,
                          alt: media.alt || "Exuro Image",
                          url: media.url,
                        },
                      })
                    }
                    allowedTypes={["image"]}
                    value={image.id}
                    render={({ open }) => (
                      <img
                        className="max-h-full w-full rounded-3xl object-contain"
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
                      alt: media.alt || "About Us Image",
                      url: media.url,
                    },
                  })
                }
                allowedTypes={["image"]}
                multiple={false}
                labels={{ title: "About Us Image" }}
              />
            )}

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
        </div>
      </div>
    </section>
  );
}
