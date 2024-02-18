import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { name, position, phone, email } = attributes;

  return (
    <div className="flex h-full flex-col">
      <RichText.Content
        className="font-poppins text-base font-[275] text-white"
        tagName="h5"
        value={position}
      />
      <RichText.Content
        className="mb-4 font-poppins text-base font-light text-white"
        tagName="h4"
        value={name}
      />
      <div className="mt-auto flex items-center gap-2">
        <a href={`mailto:${email}`}>
          <svg className="h-5 w-6 fill-gray-200 transition ease-in-out hover:-translate-y-1">
            <use xlinkHref="/icons.svg#icon-call" />
          </svg>
        </a>
        <a href={`tel:${phone}`}>
          <svg className="h-5 w-6 fill-gray-200 transition ease-in-out hover:-translate-y-1">
            <use xlinkHref="/icons.svg#icon-mail" />
          </svg>
        </a>
      </div>
    </div>
  );
}
