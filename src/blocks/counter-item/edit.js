import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
const { Fragment } = wp.element;
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { counter } = attributes;
  const blockProps = useBlockProps({
    className: "flex flex-col items-center",
  });

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title={__("Counter")}>
          <TextControl
            label="Name"
            value={counter.name}
            onChange={(name) =>
              setAttributes({ counter: { ...counter, name } })
            }
          />
          <TextControl
            label="Count"
            type="number"
            value={counter.count}
            onChange={(count) =>
              setAttributes({ counter: { ...counter, count } })
            }
          />
          <TextControl
            label="Suffix"
            value={counter.suffix}
            onChange={(suffix) =>
              setAttributes({ counter: { ...counter, suffix } })
            }
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <div className="counter-no">
          <span class="counters-count">{counter.count}</span>
          {counter.suffix}
        </div>
        <span className="font-poppins text-primary-800 sm:text-xl">
          {counter.name}
        </span>
      </div>
    </Fragment>
  );
}
