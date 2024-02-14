import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import {
  PanelRow,
  DatePicker,
  TextControl,
  SelectControl,
} from "@wordpress/components";
import { compose } from "@wordpress/compose";
import {
  withSelect,
  withDispatch,
  useSelect,
  useDispatch,
} from "@wordpress/data";
import { useState, useEffect, useRef } from "@wordpress/element";

const Metabox = () => {
  const postType = useSelect((select) => {
    return select("core/editor").getCurrentPostType();
  });

  const { editPost } = useDispatch("core/editor");

  const meta = useSelect((select) =>
    select("core/editor").getEditedPostAttribute("meta"),
  );

  if (postType !== "awards") return null; // Will only render component for post type 'awards'
  let today = new Date();

  useEffect(() => {
    if (!(meta.award_date && meta.award_recipient && meta.awarding_authority)) {
    }
  }, [meta]);

  return (
    <PluginDocumentSettingPanel
      title="Award Details"
      name="meta"
      initialOpen="true"
      icon={
        <svg>
          <use xlinkHref="/icons.svg#icon-award-star" />
        </svg>
      }
    >
      <PanelRow>
        <h3 className="text-lg">Award Date / Year*</h3>
      </PanelRow>
      <PanelRow>
        <DatePicker
          currentDate={meta && meta.award_date ? meta.award_date : null}
          onChange={(value) => editPost({ meta: { award_date: value } })}
        />
      </PanelRow>

      <PanelRow>
        <TextControl
          label="Awarding Authority"
          value={meta && meta.awarding_authority ? meta.awarding_authority : ""}
          onChange={(value) =>
            editPost({ meta: { awarding_authority: value } })
          }
        />
      </PanelRow>

      <PanelRow>
        <SelectControl
          label="Recipient Society"
          value={meta && meta.award_recipient ? meta.award_recipient : "-1"}
          options={[
            { label: "IEEE", value: "-1" },
            { label: "CASS", value: "cass" },
            { label: "CS", value: "cs" },
          ]}
          onChange={(value) => editPost({ meta: { award_recipient: value } })}
        />
      </PanelRow>
    </PluginDocumentSettingPanel>
  );
};

export default Metabox;
