import { __experimentalLinkControl as LinkControl } from "@wordpress/block-editor";
import { Popover, Button } from "@wordpress/components";

export default function LinkPickerView({
  linkPicker,
  title,
  onClose,
  value,
  onChange,
}) {
  if (linkPicker) {
    return (
      <Popover position="middle center" onFocusOutside={onClose}>
        {title && (
          <h2 className="mx-4 mt-4 font-poppins text-xl text-primary-800">
            {title}
          </h2>
        )}
        <LinkControl
          settings={[]}
          value={value}
          onChange={onChange}
          style={{ display: "block", width: "80%" }}
        />
        <Button
          variant="primary"
          onClick={onClose}
          style={{ display: "block", width: "100%" }}
        >
          Confirm Link
        </Button>
      </Popover>
    );
  }

  return <></>;
}
