import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import {
  PanelBody,
  Button,
  ColorPalette,
  TextareaControl,
  __experimentalGrid as Grid,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { sanitizeSVG } from "@skjnldsv/sanitize-svg";
const { Fragment } = wp.element;
import { useEffect } from "@wordpress/element";
import { icons, colors } from "./data";

export default function Edit({ attributes, setAttributes }) {
  const { title, content, icon, color } = attributes;
  const blockProps = useBlockProps({
    className: "flex flex-col shadow-sm",
  });

  useEffect(() => {
    handleSVGChange(icon);
  }, [color]);

  const handleSVGChange = async (newSVG) => {
    var cleanImage = await sanitizeSVG(newSVG);
    if (!cleanImage) {
      alert("Unsafe SVG Icon. Please use safe one");
      return;
    }

    cleanImage = modifySvg(cleanImage, color);
    setAttributes({ icon: cleanImage });
  };

  function modifySvg(svgString, color) {
    // Parse the SVG string into a DOM object
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, "image/svg+xml");

    // Remove width and height attributes
    doc.documentElement.removeAttribute("width");
    doc.documentElement.removeAttribute("height");

    // Change all fill attributes to the specified color
    const elementsWithFill = doc.querySelectorAll("[fill]");
    elementsWithFill.forEach((element) => {
      element.setAttribute("fill", color);
    });

    // Serialize the modified DOM object back to an SVG string
    const serializer = new XMLSerializer();
    const modifiedSvgString = serializer.serializeToString(doc);

    return modifiedSvgString;
  }

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title={__("Color")}>
          <ColorPalette
            colors={colors}
            value={color}
            onChange={(color) => setAttributes({ color })}
          />
        </PanelBody>
        <PanelBody title={__("Icon")}>
          <Grid columns={3}>
            {icons.map((_icon) => {
              return (
                <Button
                  onClick={() => handleSVGChange(_icon)}
                  style={{ height: "45px", backgroundColor: "white" }}
                >
                  <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(_icon)}`}
                    style={{ width: "30px", margin: "auto" }}
                    alt={title}
                  />
                </Button>
              );
            })}
          </Grid>

          <TextareaControl
            label="SVG icon code"
            help="Paste SVG icon code here"
            value={icon}
            onChange={handleSVGChange}
          />
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(icon)}`}
            width="50%"
            alt={title}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <hr className="mb-2 h-1" style={{ backgroundColor: color }} />
        <div className="mx-5 flex">
          <RichText
            className="text-balance mt-6 w-full font-light text-black lg:min-h-[3.6] xl:min-h-[4.6rem] 2xl:min-h-0"
            tagName="h3"
            value={title}
            allowedFormats={[]}
            onChange={(title) => setAttributes({ title })}
            placeholder={__("Title...")}
          />
          <div className="ml-5">
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(icon)}`}
              className="h-12 w-12"
              alt={title}
            />
          </div>
        </div>
        <RichText
          className="mx-5 my-4  text-base font-light text-gray-600"
          tagName="p"
          value={content}
          allowedFormats={[]}
          onChange={(content) => setAttributes({ content })}
          placeholder={__("Content...")}
        />
      </div>
    </Fragment>
  );
}
