import {
  RichText,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { PanelBody, PanelRow, TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { name, position, phone, email } = attributes;
  const blockProps = useBlockProps({
    className: "flex h-full flex-col bg-primary-800",
  });

  return (
    <Fragment>
      <div {...blockProps}>
        <RichText
          className="font-poppins text-base font-[275] text-white"
          tagName="h5"
          value={position}
          allowedFormats={[]}
          onChange={(position) => setAttributes({ position })}
          placeholder="Position..."
        />
        <RichText
          className="mb-4 font-poppins text-base font-light text-white"
          tagName="h4"
          value={name}
          allowedFormats={[]}
          onChange={(name) => setAttributes({ name })}
          placeholder="Name..."
        />
        <div className="mt-auto flex items-center gap-2">
          <a>
            <svg className="h-5 w-6 text-gray-200 transition ease-in-out hover:-translate-y-1">
              <use xlinkHref="/icons.svg#icon-call" />
            </svg>
          </a>
          <a>
            <svg className="h-5 w-6 text-gray-200 transition ease-in-out hover:-translate-y-1">
              <use xlinkHref="/icons.svg#icon-mail" />
            </svg>
          </a>
        </div>
      </div>

      <InspectorControls>
        <PanelBody title="Buttons">
          <PanelRow>
            <TextControl
              label="Email Id"
              value={email}
              onChange={(email) => setAttributes({ email })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Phone Number"
              value={phone}
              onChange={(phone) => setAttributes({ phone })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    </Fragment>
  );
}
