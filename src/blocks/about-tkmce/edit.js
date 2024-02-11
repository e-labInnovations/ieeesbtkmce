import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import EditIcon from "../../components/edit-icon/EditIcon";
import LinkPickerView from "../../components/link-picker/LinkPickerView";
import ImagePicker from "../../components/image-picker/ImagePicker";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { content, image, websiteLink } = attributes;
  const [linkPicker, setLinkPicker] = useState(null);
  const blockProps = useBlockProps();

  return (
    <section {...blockProps}>
      <div className="my-8 flex flex-col gap-6 sm:flex-row md:my-16">
        <div className="flex w-full flex-col gap-6 sm:w-1/2">
          <h2 className="font-poppins text-3xl text-primary-800">
            About TKM College of Engineering
          </h2>
          <RichText
            className="font-poppins text-base font-light text-black"
            tagName="p"
            value={content}
            onChange={(content) => setAttributes({ content })}
            placeholder={"Content..."}
          />
          <button
            onClick={() => setLinkPicker("tkmce")}
            className="group relative w-fit rounded bg-primary-800 p-2 px-6 text-center text-white transition-shadow hover:shadow-md hover:shadow-gray-400"
          >
            Visit Website
            <EditIcon />
          </button>

          <LinkPickerView
            linkPicker={linkPicker}
            title={"TKMCE Website Link"}
            value={websiteLink}
            onChange={(newLink) => {
              setAttributes({ websiteLink: newLink });
            }}
            onClose={() => setLinkPicker(null)}
          />
        </div>
        <div className="group relative flex w-full flex-col gap-6 sm:w-1/2">
          <ImagePicker
            className="w-full rounded-xl"
            image={image}
            onSelect={(media) =>
              setAttributes({
                image: {
                  id: media.id,
                  alt: media.alt || "About TKMCE",
                  url: media.url,
                },
              })
            }
            title="TKMCE About Image"
          />

          <EditIcon />
        </div>
      </div>
    </section>
  );
}
