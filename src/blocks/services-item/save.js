import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { title, content, icon, color } = attributes;

  return (
    <div className="flex flex-col shadow-sm">
      <hr className="mb-2 h-1" style={{ backgroundColor: color }} />
      <div className="mx-5 flex">
        <RichText.Content
          tagName="h3"
          value={title}
          className="text-balance mt-6 w-full font-light text-black lg:min-h-[3.6] xl:min-h-[4.6rem] 2xl:min-h-0"
        />
        <div className="ml-5">
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(icon)}`}
            className="h-12 w-12"
            alt={title}
          />
        </div>
      </div>
      <RichText.Content
        tagName="p"
        value={content}
        className="mx-5 my-4  text-base font-light text-gray-600"
      />
    </div>
  );
}
