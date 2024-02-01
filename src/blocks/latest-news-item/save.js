import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { image, title, content, registerLink, detailsLink } = attributes;

  return (
    <div className="news-item hidden">
      <img
        src={image.url}
        alt={image.alt}
        className="h-full max-h-full rounded-xl"
      />
      <RichText.Content
        className="hidden"
        data-title={title}
        data-details-url={(detailsLink && detailsLink.url) || "#"}
        data-register-url={(registerLink && registerLink.url) || "#"}
        tagName="p"
        value={content}
      />
    </div>
  );
}
