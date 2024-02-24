import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import {
  PanelRow,
  DateTimePicker,
  TextControl,
  SelectControl,
  BaseControl,
} from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const Metabox = () => {
  const postType = useSelect((select) => {
    return select("core/editor").getCurrentPostType();
  });
  if (postType !== "events") return null; // Will only render component for post type 'events'

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

  let chapterOptions = [];
  chapterOptions.push({ value: -1, label: "IEEE" });
  if (chapters) {
    chapters.forEach((chapter) => {
      chapterOptions.push({
        value: chapter.id,
        label: chapter.slug.toUpperCase(),
      });
    });
  }

  return (
    <PluginDocumentSettingPanel
      title="Event Details"
      name="meta"
      initialOpen="true"
      icon={
        <svg>
          <use xlinkHref="/icons.svg#icon-award-star" />
        </svg>
      }
    >
      <PanelRow>
        <h3 className="text-lg">Event Date</h3>
      </PanelRow>
      <PanelRow>
        <DateTimePicker
          currentDate={meta && meta.event_datetime ? meta.event_datetime : null}
          onChange={(value) => editPost({ meta: { event_datetime: value } })}
          is12Hour
        />
      </PanelRow>

      <PanelRow>
        <TextControl
          label="Registration Link"
          value={meta && meta.registration_link ? meta.registration_link : ""}
          onChange={(value) => editPost({ meta: { registration_link: value } })}
        />
      </PanelRow>

      <PanelRow>
        <SelectControl
          label="Registration Status"
          value={
            meta && meta.registration_status ? meta.registration_status : "-1"
          }
          options={[
            { label: "Not Open", value: "not_open" },
            { label: "Open", value: "open" },
            { label: "Closed", value: "closed" },
          ]}
          onChange={(value) =>
            editPost({ meta: { registration_status: value } })
          }
        />
      </PanelRow>
      <PanelRow>
        <BaseControl label="Organizers">
          <Select
            value={
              chapterOptions
                ? chapterOptions.filter((option) => {
                    return meta.organizers.includes(option.value);
                  })
                : []
            }
            isMulti
            components={animatedComponents}
            name="Organizers"
            options={chapterOptions}
            className="w-full"
            classNamePrefix="select"
            onChange={(options) => {
              editPost({
                meta: { organizers: options.map((org) => org.value) },
              });
            }}
          />
        </BaseControl>
      </PanelRow>
    </PluginDocumentSettingPanel>
  );
};

export default Metabox;
