import {
  RichText,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
  __experimentalLinkControl as LinkControl,
  useBlockProps,
} from "@wordpress/block-editor";
import { Popover, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
const { Fragment } = wp.element;
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { subTitle, content, image, linkObject } = attributes;
  const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);
  const blockProps = useBlockProps({
    className: "flex flex-col px-12 sm:flex-row sm:px-12 md:px-24 xl:px-48",
  });

  return (
    <Fragment>
      <div {...blockProps}>
        <div className="flex w-full justify-center p-3 sm:w-1/2 sm:px-8 md:px-10">
          <div className="xl:p-18 h- group flex bg-[url('https://gcdnb.pbrd.co/images/PkifbtJpKNDA.png?o=1')] bg-contain bg-center bg-no-repeat p-12 sm:p-8 lg:p-16">
            {image && image.url ? (
              <>
                <MediaUploadCheck>
                  <MediaUpload
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
                    value={image.id}
                    render={({ open }) => (
                      <img
                        src={image.url}
                        onClick={open}
                        className="my-auto hidden aspect-square w-full cursor-edit rounded-full object-cover shadow-inner group-hover:block"
                        alt={image.alt}
                      />
                    )}
                  />
                </MediaUploadCheck>
                <img
                  src={image.url}
                  className="my-auto block aspect-square w-full rounded-full object-cover shadow-inner group-hover:hidden"
                  alt={image.alt}
                />
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
          </div>
        </div>
        <div className="flex w-full flex-col justify-center p-3 sm:w-1/2">
          <h2 className="my-5 font-sans text-3xl text-primary-800 sm:mb-6">
            About Us
          </h2>
          <RichText
            className="mb-1 text-xl sm:mb-2 md:mb-2"
            tagName="h3"
            value={subTitle}
            allowedFormats={["core/bold", "core/italic"]}
            onChange={(subTitle) => setAttributes({ subTitle })}
            placeholder={__("Heading...")}
          />
          <RichText
            className="font-light"
            tagName="p"
            value={content}
            allowedFormats={["core/bold", "core/italic"]}
            onChange={(content) => setAttributes({ content })}
            placeholder={__("Content...")}
          />
          <div className="mt-8 flex flex-row sm:mt-8 md:mt-10 xl:mt-12">
            <a
              onClick={() => setIsLinkPickerVisible((prev) => !prev)}
              className="rounded p-2 px-5 text-center text-primary-800 no-underline outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400"
            >
              More Details
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
      </div>
    </Fragment>
  );
}
