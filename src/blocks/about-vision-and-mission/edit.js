import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { vision, mission } = attributes;
  const blockProps = useBlockProps();

  return (
    <section {...blockProps}>
      <div className="my-8 flex flex-col gap-6 sm:flex-row md:my-16">
        <div className="flex w-full flex-col gap-6 sm:w-1/2">
          <div className="flex items-center gap-4">
            <svg className="h-11 w-11 fill-black">
              <use xlinkHref="/icons.svg#icon-vision" />
            </svg>
            <h2 className="font-poppins text-xl text-black">Our Vision</h2>
          </div>
          <RichText
            className="font-poppins text-base font-light text-black"
            tagName="p"
            value={vision}
            onChange={(vision) => setAttributes({ vision })}
            placeholder={"Vision here"}
          />
        </div>
        <div className="flex w-full flex-col gap-6 sm:w-1/2">
          <div className="flex items-center gap-4">
            <svg className="h-11 w-11 fill-black">
              <use xlinkHref="/icons.svg#icon-mission" />
            </svg>
            <h2 className="font-poppins text-xl text-black">Our Mission</h2>
          </div>
          <RichText
            className="font-poppins text-base font-light text-black"
            tagName="p"
            value={mission}
            onChange={(mission) => setAttributes({ mission })}
            placeholder={"Mission here"}
          />
        </div>
      </div>
    </section>
  );
}
