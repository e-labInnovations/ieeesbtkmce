import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import {
  PanelRow,
  DatePicker,
  TextControl,
  SelectControl,
} from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";

const Metabox = () => {
  const postType = useSelect((select) => {
    return select("core/editor").getCurrentPostType();
  });

  if (postType !== "awards") return null; // Will only render component for post type 'awards'

  const { editPost } = useDispatch("core/editor");

  const meta = useSelect((select) =>
    select("core/editor").getEditedPostAttribute("meta"),
  );

  const chapters = useSelect((select) => {
    const query = {
      status: "publish",
      per_page: -1,
    };

    return select("core").getEntityRecords("postType", "chapters", query);
  });

  let options = [];
  if (chapters) {
    options.push({ value: -1, label: "IEEE" });
    chapters.forEach((chapter) => {
      options.push({
        value: chapter.id,
        label: `${chapter.slug.toUpperCase()} - ${chapter.title.rendered}`,
      });
    });
  } else {
    options.push({ value: -1, label: "Loading..." });
  }

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
          label="Recipient Chapter"
          value={meta && meta.award_recipient ? meta.award_recipient : "-1"}
          options={options}
          onChange={(value) => editPost({ meta: { award_recipient: value } })}
        />
      </PanelRow>
    </PluginDocumentSettingPanel>
  );
};

export default Metabox;
