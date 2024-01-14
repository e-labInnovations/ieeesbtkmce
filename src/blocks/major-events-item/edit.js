import { useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { Spinner } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { eventId } = attributes;
  const [thePreview, setThePreview] = useState("");

  useEffect(() => {
    async function go() {
      const response = await apiFetch({
        path: `/majorEvent/v1/getHTML?eventId=${eventId}`,
        method: "GET",
      });
      const responseWithoutHref = response.replace(/href="[^"]*"/g, "");

      setThePreview(responseWithoutHref);
      if (response == "") {
        setThePreview(`<div class="bg-gray-200 p-4 text-center">
			<p class="text-base font-semibold text-gray-800">Select an event</p>
		</div>`);
      }
    }
    go();
  }, [eventId]);

  const allEvents = useSelect((select) => {
    return select("core").getEntityRecords("postType", "events", {
      per_page: -1,
    });
  });

  const blockProps = useBlockProps({
    className: "flex flex-col slide mx-3 w-full h-max",
  });

  if (allEvents == null) {
    return (
      <div>
        <Spinner />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div {...blockProps}>
      <select
        class="my-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black focus:border-primary-800 focus:ring-primary-800"
        onChange={(e) => setAttributes({ eventId: e.target.value })}
      >
        <option>Choose an event</option>
        {allEvents.map((event) => {
          return (
            <option value={event.id} selected={eventId == event.id}>
              {event.title.rendered}
            </option>
          );
        })}
      </select>
      <div dangerouslySetInnerHTML={{ __html: thePreview }}></div>
    </div>
  );
}
