import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import ServerSideRender from "@wordpress/server-side-render";
import { Fragment } from "@wordpress/element";
import { PanelBody, SelectControl } from "@wordpress/components";
import "./editor.scss";
import metadata from "./block.json";

const Placeholder = () => {
  return (
    <div className="bg-gray-200 p-4 text-center">
      <p className="text-xl font-semibold text-gray-800">Header Placeholder</p>
    </div>
  );
};

export default function Edit({ attributes, setAttributes }) {
  const { mode } = attributes;
  const blockProps = useBlockProps();

  return (
    <Fragment>
      <div {...blockProps}>
        <ServerSideRender
          block={metadata.name}
          attributes={{
            mode,
          }}
          LoadingResponsePlaceholder={Placeholder}
        />
      </div>

      <InspectorControls>
        <PanelBody title="Header Settings">
          <SelectControl
            value={mode}
            onChange={(value) => setAttributes({ mode: value })}
            options={[
              {
                label: "Light",
                value: "light",
              },
              {
                label: "Dark",
                value: "dark",
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
    </Fragment>
  );
}
