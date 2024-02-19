import { useSelect, useDispatch } from "@wordpress/data";
import { BaseControl, Button, Spinner } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";

const MetaImageControl = (props) => {
  const { imageId, image } = useSelect((select) => {
    const id =
      select("core/editor").getEditedPostAttribute("meta")[props.metaKey];

    return {
      imageId: id,
      image: select("core").getMedia(id),
    };
  });

  // update meta data
  const { editPost } = useDispatch("core/editor", [imageId]);

  return (
    <BaseControl label={props.label}>
      <MediaUploadCheck>
        <MediaUpload
          onSelect={(media) =>
            editPost({ meta: { [props.metaKey]: media.id } })
          }
          allowedTypes={["image"]}
          value={imageId}
          render={({ open }) => (
            <div className="editor-post-featured-image">
              <div className="editor-post-featured-image__container">
                {!imageId && (
                  <Button
                    className="components-button editor-post-featured-image__toggle"
                    onClick={open}
                  >
                    Select image
                  </Button>
                )}
                {!!imageId && !image && <Spinner />}
                {!!image && image && (
                  <Button variant="link" onClick={open}>
                    <img src={image.source_url} />
                  </Button>
                )}
              </div>
            </div>
          )}
        />
      </MediaUploadCheck>
      {!!imageId && (
        <Button
          onClick={() => editPost({ meta: { [props.metaKey]: 0 } })}
          isLink
          isDestructive
        >
          Remove image
        </Button>
      )}
    </BaseControl>
  );
};

export default MetaImageControl;
