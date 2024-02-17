import {
  RichText,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import { useState, Fragment } from "@wordpress/element";
import { PanelBody, TextareaControl } from "@wordpress/components";
import EditIcon from "../../components/edit-icon/EditIcon";
import LinkPickerView from "../../components/link-picker/LinkPickerView";
import ImagePicker from "../../components/image-picker/ImagePicker";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { bgImage, heading, subHeading, buttonLink } = attributes;
  const [linkPicker, setLinkPicker] = useState(null);

  const blockProps = useBlockProps({
    className: "front-banner relative flex h-screen w-full bg-gray-300",
  });

  return (
    <Fragment>
      <section {...blockProps}>
        <div
          id="hero-bg"
          className="flex h-screen w-screen"
          style={{
            backgroundImage: `url("${
              bgImage && bgImage.url
                ? bgImage.url
                : `${themeData.theme_url}/assets/images/hero-bg.jpg`
            }")`,
          }}
        >
          <canvas id="hero-canvas" />
          <div className="absolute left-1/2 top-1/2 m-auto mt-10 flex w-10/12 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-8 text-center font-poppins text-white md:w-8/12 lg:w-7/12">
            <RichText
              className="text-3xl font-bold md:text-4xl"
              tagName="h1"
              value={heading}
              allowedFormats={["core/bold", "core/italic"]}
              onChange={(heading) => setAttributes({ heading })}
              placeholder={"First Line..."}
            />
            <RichText
              className="text-3xl font-light uppercase md:text-4xl"
              tagName="h2"
              value={subHeading}
              allowedFormats={["core/bold", "core/italic"]}
              onChange={(subHeading) => setAttributes({ subHeading })}
              placeholder={"Second Line..."}
            />
            <a
              onClick={() => setLinkPicker(true)}
              className="group relative my-8 px-8 py-1 outline outline-1 outline-white hover:bg-black/50"
            >
              JOIN IEEE
              <EditIcon />
            </a>

            <LinkPickerView
              linkPicker={linkPicker}
              title={"Join IEEE Link"}
              value={buttonLink}
              onChange={(newLink) => {
                setAttributes({ buttonLink: newLink });
              }}
              onClose={() => setLinkPicker(null)}
            />
          </div>
        </div>
      </section>

      <InspectorControls>
        <PanelBody title={"Background Image"}>
          <ImagePicker
            className="w-full rounded-xl"
            image={bgImage}
            onSelect={(media) =>
              setAttributes({
                bgImage: {
                  id: media.id,
                  url: media.url,
                },
              })
            }
            title="Background Image"
          />
        </PanelBody>
      </InspectorControls>
    </Fragment>
  );
}
