import {
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";

export default function ImagePicker({ image, onSelect, className, title }) {
  if (image && image.url) {
    return (
      <>
        <MediaUploadCheck>
          <MediaUpload
            onSelect={onSelect}
            allowedTypes={["image"]}
            value={image.id}
            render={({ open }) => (
              <img
                src={image.url}
                onClick={open}
                className={className}
                alt={image.alt}
              />
            )}
          />
        </MediaUploadCheck>
      </>
    );
  } else {
    return (
      <MediaPlaceholder
        onSelect={onSelect}
        allowedTypes={["image"]}
        multiple={false}
        labels={{ title: title }}
      />
    );
  }
}
