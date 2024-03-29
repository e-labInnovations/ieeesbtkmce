import {
  RichText,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
  __experimentalLinkControl as LinkControl,
  useBlockProps,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, PanelRow } from "@wordpress/components";
import { Fragment, useEffect, useState } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { content, societies, title } = attributes;
  const blockProps = useBlockProps({
    className: "w-full overflow-hidden",
  });

  const [theme_url, setTheme_url] = useState("");

  useEffect(() => {
    setTheme_url(
      wp.data.select("core/block-editor").getSettings().themeData.theme_url,
    );
  }, []);

  const setSocietyLink = (society, newLinkObject) => {
    setAttributes({
      societies: {
        ...societies,
        [society]: {
          ...societies[society],
          linkObject: newLinkObject,
        },
      },
    });
  };

  function SocietyImage({ society, image }) {
    return (
      <div className="group relative w-1/2">
        {image && image.url ? (
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => {
                setAttributes({
                  societies: {
                    ...societies,
                    [society]: {
                      ...societies[society],
                      image: {
                        id: media.id,
                        alt: media.alt || `Society ${society} Image`,
                        url: media.url,
                      },
                    },
                  },
                });
              }}
              allowedTypes={["image"]}
              value={image.id}
              render={({ open }) => (
                <img
                  className="w-full"
                  src={image.url}
                  alt={image.alt}
                  onClick={open}
                />
              )}
            />
          </MediaUploadCheck>
        ) : (
          <MediaPlaceholder
            onSelect={(media) => {
              setAttributes({
                societies: {
                  ...societies,
                  [society]: {
                    ...societies[society],
                    image: {
                      id: media.id,
                      alt: media.alt || `Society ${society} Image`,
                      url: media.url,
                    },
                  },
                },
              });
            }}
            allowedTypes={["image"]}
            multiple={false}
            labels={{ title: `Society ${society} Image` }}
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
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
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
      <section {...blockProps}>
        <div className="container mx-auto my-8 flex flex-col gap-8 px-4 sm:flex-row sm:gap-24 md:my-16 xl:px-28">
          <div className="flex max-h-min w-full flex-col gap-6 sm:w-5/12">
            <RichText
              className="font-poppins text-3xl text-primary-800 sm:block"
              tagName="h2"
              value={title}
              onChange={(title) => setAttributes({ title })}
              placeholder={"Title..."}
            />
            <RichText
              className="font-poppins text-base font-light text-black"
              tagName="p"
              value={content}
              onChange={(content) => setAttributes({ content })}
              placeholder={"Content..."}
            />
          </div>
          <div className="h-full w-full sm:w-7/12">
            <svg viewBox="0 0 640 580" className="w-full overflow-visible">
              <defs>
                <filter id="drop-shadow">
                  <feGaussianBlur in="SourceAlpha" stdDeviation={1} />
                  <feOffset dx={1} dy={1} />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter
                  id="drop-shadow-hover"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur in="SourceAlpha" stdDeviation={8} />
                  <feOffset dx={0} dy={0} result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {Object.entries(societies).map(([societyName, society]) => {
                  return (
                    <pattern
                      id={`society_${societyName}`}
                      x="0%"
                      y="0%"
                      height="100%"
                      width="100%"
                      viewBox="0 0 1 1"
                    >
                      <rect
                        width={1}
                        height={1}
                        className={`fill-${society.bg_color}`}
                      />

                      <image
                        xlinkHref={
                          society.image && society.image.url
                            ? society.image.url
                            : `${theme_url}/assets/images/societies/front/${societyName}.svg`
                        }
                        x="0.1"
                        y="0.1"
                        width="0.8"
                        height="0.8"
                        preserveAspectRatio="xMidYMid meet"
                      />
                    </pattern>
                  );
                })}
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                .society-rect {\n                  filter: url(#drop-shadow);\n                  stroke-width: 0.25;\n                  filter: url(#drop-shadow);\n                  rx: 35;\n                }\n\n                .society-rect:hover {\n                  filter: url(#drop-shadow-hover);\n                }\n              ",
                  }}
                />
              </defs>

              <a>
                <rect
                  x="86.5958"
                  y="7.1709"
                  width={170}
                  height={170}
                  fill="url(#society_pes)"
                  className="society-rect stroke-primary-800"
                />
              </a>
              <a>
                <rect
                  x="272.491"
                  y="7.1709"
                  width={170}
                  height={170}
                  fill="url(#society_ras)"
                  className="society-rect stroke-primary-800"
                />
              </a>
              <a>
                <rect
                  x="458.387"
                  y="7.1709"
                  width={170}
                  height={170}
                  fill="url(#society_cs)"
                  className="society-rect stroke-primary-800"
                />
              </a>
              <a>
                <rect
                  x="10.9073"
                  y="204.143"
                  width={170}
                  height={170}
                  fill="url(#society_sight)"
                  className="society-rect stroke-primary-800"
                />
              </a>
              <a>
                <rect
                  x="196.803"
                  y="204.143"
                  width={170}
                  height={170}
                  fill="url(#society_ias)"
                  className="society-rect stroke-primary-800"
                />
              </a>
              <a>
                <rect
                  x="382.698"
                  y="204.143"
                  width={170}
                  height={170}
                  fill="url(#society_sps)"
                  className="society-rect stroke-primary-800"
                />
              </a>
              <rect
                x="580.262"
                y="204.143"
                height={170}
                rx={35}
                fill="#006DA5"
                className="w-screen"
                filter="url(#drop-shadow)"
              />
              <a>
                <rect
                  x="86.5958"
                  y="401.115"
                  width={170}
                  height={170}
                  fill="url(#society_wie)"
                  className="society-rect stroke-primary-800"
                />
              </a>
              <a>
                <rect
                  x="272.491"
                  y="401.115"
                  width={170}
                  height={170}
                  fill="url(#society_cass)"
                  className="society-rect stroke-primary-800"
                />
              </a>
              <a>
                <rect
                  x="458.387"
                  y="401.115"
                  width={170}
                  height={170}
                  fill="url(#society_ies)"
                  className="society-rect stroke-primary-800"
                />
              </a>
            </svg>
          </div>
        </div>
      </section>
      <InspectorControls>
        {Object.entries(societies).map(([societyName, society]) => {
          return (
            <PanelBody title={society.name}>
              <PanelRow className="w-full max-w-full">
                <SocietyImage society={societyName} image={society.image} />
              </PanelRow>
              <PanelRow>
                <LinkControl
                  className="w-full max-w-full"
                  settings={[]}
                  value={society.linkObject}
                  onChange={(newLink) => setSocietyLink(societyName, newLink)}
                  style={{ display: "block", width: "80%" }}
                />
              </PanelRow>
            </PanelBody>
          );
        })}
      </InspectorControls>
    </Fragment>
  );
}
