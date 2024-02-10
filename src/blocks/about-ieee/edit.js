import {
  RichText,
  __experimentalLinkControl as LinkControl,
  useBlockProps,
} from "@wordpress/block-editor";
import { Popover, Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import EditIcon from "../../components/edit-icon/EditIcon";
import LinkPickerView from "../../components/link-picker/LinkPickerView";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { ieeeContent, ieeeKeralaContent, ieeeLink, ieeeKeralaLink } =
    attributes;
  const blockProps = useBlockProps();
  const [linkPicker, setLinkPicker] = useState(null);

  return (
    <section {...blockProps}>
      <div className="my-8 flex flex-col gap-6 sm:flex-row md:my-16">
        <div className="flex w-full flex-col gap-6 sm:w-1/2">
          <h2 className="font-poppins text-3xl text-primary-800">About IEEE</h2>
          <RichText
            className="font-poppins text-base font-light text-black"
            tagName="p"
            value={ieeeContent}
            onChange={(ieeeContent) => setAttributes({ ieeeContent })}
            placeholder={"Content..."}
          />
          <button
            onClick={() => setLinkPicker("ieee")}
            className="group relative mt-auto w-fit rounded bg-primary-800 p-2 px-6 text-center font-poppins text-white transition-shadow hover:shadow-md hover:shadow-gray-400"
          >
            Visit Website
            <EditIcon />
          </button>
        </div>
        <div className="flex w-full flex-col gap-6 sm:w-1/2">
          <h2 className="font-poppins text-3xl text-primary-800">
            About IEEE Kerala Section
          </h2>
          <RichText
            className="font-poppins text-base font-light text-black"
            tagName="p"
            value={ieeeKeralaContent}
            onChange={(ieeeKeralaContent) =>
              setAttributes({ ieeeKeralaContent })
            }
            placeholder={"Content..."}
          />
          <button
            onClick={() => setLinkPicker("ieeeKerala")}
            className="group relative mt-auto w-fit rounded bg-primary-800 p-2 px-6 text-center font-poppins text-white transition-shadow hover:shadow-md hover:shadow-gray-400"
          >
            Visit Website
            <EditIcon />
          </button>
        </div>

        <LinkPickerView
          linkPicker={linkPicker}
          title={linkPicker == "ieee" ? "IEEE" : "IEEE Kerala"}
          value={linkPicker == "ieee" ? ieeeLink : ieeeKeralaLink}
          onChange={(newLink) => {
            if (linkPicker == "ieee") setAttributes({ ieeeLink: newLink });
            else setAttributes({ ieeeKeralaLink: newLink });
          }}
          onClose={() => setLinkPicker(null)}
        />
      </div>
    </section>
  );
}
