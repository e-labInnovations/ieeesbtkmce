import {
  useBlockProps,
  RichText,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Fragment, useState, useEffect } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { gallery, quotes } = attributes;
  const blockProps = useBlockProps();
  const [theme_url, setTheme_url] = useState("");

  useEffect(() => {
    setTheme_url(
      wp.data.select("core/block-editor").getSettings().themeData.theme_url,
    );
  }, []);

  const updatedQuote = (setIndex, key, value) => {
    return quotes.map((item, index) => {
      if (index === setIndex) {
        return { ...item, [key]: value };
      }
      return item;
    });
  };

  const updatedGallery = (setIndex, image) => {
    let newImages = [...gallery];
    newImages[setIndex] = image;
    return newImages;
  };

  function GalleryImage({ position }) {
    return (
      <Fragment>
        <MediaUploadCheck>
          <MediaUpload
            onSelect={(media) => {
              console.log(updatedGallery(position, media));
              setAttributes({ gallery: updatedGallery(position, media) });
            }}
            value={gallery[position].id}
            render={({ open }) => {
              return (
                <div
                  onClick={open}
                  className="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      gallery && gallery[position] && gallery[position].url
                        ? `url("${gallery[position].url}")`
                        : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`,
                  }}
                />
              );
            }}
          />
        </MediaUploadCheck>

        <div class="absolute -end-2 -top-2 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-primary-800 p-1 text-xs font-bold text-white group-hover:inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-pencil-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
          </svg>
        </div>
      </Fragment>
    );
  }

  return (
    <section {...blockProps}>
      <div className="container mx-auto my-8 grid h-screen grid-cols-12 grid-rows-6 gap-1 px-4 md:my-16 md:grid-cols-7 md:grid-rows-5 md:gap-4 xl:px-28">
        <div className="group relative col-span-8 col-start-1 row-span-1 row-start-1 cursor-pointer md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1">
          <GalleryImage position={0} />
        </div>
        <div className="group relative col-span-9 col-start-4 row-span-1 row-start-3 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-1">
          <GalleryImage position={1} />
        </div>
        <div className="col-span-6 col-start-4 row-span-1 row-start-2 rounded-lg bg-gray-100 p-2 md:col-span-2 md:col-start-5 md:row-span-1 md:row-start-1">
          <div className="flex h-full flex-col">
            <div className="overflow-x-hidden overflow-y-hidden">
              <RichText
                className="marquee font-poppins text-sm font-light italic md:text-base"
                tagName="p"
                value={quotes[0].content}
                allowedFormats={["core/bold", "core/italic"]}
                onChange={(content) =>
                  setAttributes({ quotes: updatedQuote(0, "content", content) })
                }
                placeholder={"Quote..."}
              />
            </div>
            <div className="my-auto">
              <RichText
                className="mt-1 font-poppins text-sm font-medium leading-none md:text-base"
                tagName="h4"
                value={quotes[0].author}
                allowedFormats={["core/bold", "core/italic"]}
                onChange={(author) =>
                  setAttributes({ quotes: updatedQuote(0, "author", author) })
                }
                placeholder={"Author..."}
              />
              <RichText
                className="text-sm font-light leading-none"
                tagName="span"
                value={quotes[0].designation}
                allowedFormats={["core/bold", "core/italic"]}
                onChange={(designation) =>
                  setAttributes({
                    quotes: updatedQuote(0, "designation", designation),
                  })
                }
                placeholder={"Designation..."}
              />
            </div>
          </div>
        </div>
        <div className="group relative col-span-3 col-start-10 row-span-1 row-start-2 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-7 md:row-span-1 md:row-start-1">
          <GalleryImage position={2} />
        </div>
        <div className="group relative col-span-3 col-start-1 row-span-2 row-start-2 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-3 md:row-span-4 md:row-start-2">
          <GalleryImage position={3} />
        </div>
        <div className="group relative col-span-8 col-start-5 row-span-1 row-start-4 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-3 md:col-start-4 md:row-span-2 md:row-start-2">
          <GalleryImage position={4} />
        </div>
        <div className="col-span-4 col-start-1 row-span-1 row-start-4 rounded-lg bg-gray-100 p-2 md:col-span-1 md:col-start-7 md:row-span-2 md:row-start-2">
          <div className="flex h-full flex-col">
            <div className="overflow-x-hidden overflow-y-hidden">
              <RichText
                className="marquee font-poppins text-sm font-light italic md:text-base"
                tagName="p"
                value={quotes[1].content}
                allowedFormats={["core/bold", "core/italic"]}
                onChange={(content) =>
                  setAttributes({ quotes: updatedQuote(1, "content", content) })
                }
                placeholder={"Quote..."}
              />
            </div>
            <div className="my-auto">
              <RichText
                className="mt-1 font-poppins text-sm font-medium leading-none md:text-base"
                tagName="h4"
                value={quotes[1].author}
                allowedFormats={["core/bold", "core/italic"]}
                onChange={(author) =>
                  setAttributes({ quotes: updatedQuote(1, "author", author) })
                }
                placeholder={"Author..."}
              />
              <RichText
                className="text-sm font-light leading-none"
                tagName="span"
                value={quotes[1].designation}
                allowedFormats={["core/bold", "core/italic"]}
                onChange={(designation) =>
                  setAttributes({
                    quotes: updatedQuote(1, "designation", designation),
                  })
                }
                placeholder={"Designation..."}
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 col-start-9 row-span-1 row-start-1 rounded-lg bg-gray-100 p-2 md:col-span-2 md:col-start-1 md:row-span-1 md:row-start-3">
          <div className="flex h-full flex-col">
            <div className="overflow-x-hidden overflow-y-hidden">
              <RichText
                className="marquee font-poppins text-sm font-light italic md:text-base"
                tagName="p"
                value={quotes[2].content}
                allowedFormats={["core/bold", "core/italic"]}
                onChange={(content) =>
                  setAttributes({ quotes: updatedQuote(2, "content", content) })
                }
                placeholder={"Quote..."}
              />
            </div>
            <div className="my-auto">
              <RichText
                className="mt-1 font-poppins text-sm font-medium leading-none md:text-base"
                tagName="h4"
                value={quotes[2].author}
                allowedFormats={["core/bold", "core/italic"]}
                onChange={(author) =>
                  setAttributes({ quotes: updatedQuote(2, "author", author) })
                }
                placeholder={"Author..."}
              />
              <RichText
                className="text-sm font-light leading-none"
                tagName="span"
                value={quotes[2].designation}
                allowedFormats={["core/bold", "core/italic"]}
                onChange={(designation) =>
                  setAttributes({
                    quotes: updatedQuote(2, "designation", designation),
                  })
                }
                placeholder={"Designation..."}
              />
            </div>
          </div>
        </div>
        <div className="group relative col-span-9 col-start-1 row-span-1 row-start-6 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-4">
          <GalleryImage position={5} />
        </div>
        <div className="col-span-3 col-start-10 row-span-2 row-start-5 rounded-lg bg-gray-100 p-2 md:col-span-2 md:col-start-4 md:row-span-2 md:row-start-4">
          <div className="flex h-full flex-col">
            <div className="overflow-x-hidden overflow-y-hidden">
              <RichText
                className="marquee font-poppins text-sm font-light italic md:text-base"
                tagName="p"
                value={quotes[3].content}
                allowedFormats={["core/bold", "core/italic"]}
                onChange={(content) =>
                  setAttributes({ quotes: updatedQuote(3, "content", content) })
                }
                placeholder={"Quote..."}
              />
            </div>
            <div className="my-auto">
              <RichText
                className="mt-1 font-poppins text-sm font-medium leading-none md:text-base"
                tagName="h4"
                value={quotes[3].author}
                allowedFormats={["core/bold", "core/italic"]}
                onChange={(author) =>
                  setAttributes({ quotes: updatedQuote(3, "author", author) })
                }
                placeholder={"Author..."}
              />
              <RichText
                className="text-sm font-light leading-none"
                tagName="span"
                value={quotes[3].designation}
                allowedFormats={["core/bold", "core/italic"]}
                onChange={(designation) =>
                  setAttributes({
                    quotes: updatedQuote(3, "designation", designation),
                  })
                }
                placeholder={"Designation..."}
              />
            </div>
          </div>
        </div>
        <div className="group relative col-span-3 col-start-1 row-span-1 row-start-5 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-6 md:row-span-2 md:row-start-4">
          <GalleryImage position={6} />
        </div>
        <div className="group relative col-span-6 col-start-4 row-span-1 row-start-5 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-7 md:row-span-2 md:row-start-4">
          <GalleryImage position={7} />
        </div>
      </div>
    </section>
  );
}
