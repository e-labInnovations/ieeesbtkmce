import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: "major-events-hosted",
  });

  const blockProps2 = useBlockProps({
    id: "meh-slider",
    className:
      "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  });

  const innerBlocksProps = useInnerBlocksProps(blockProps2, {
    allowedBlocks: ["ieeesbtkmce/major-events-item"],
    orientation: "horizontal",
  });

  return (
    <section {...blockProps}>
      <div className="container mx-auto my-8 flex flex-col gap-6 px-4 xl:px-28">
        <div className="flex w-full items-center justify-between py-2">
          <h2 className="font-poppins text-3xl font-normal text-primary-800">
            Major Events Hosted
          </h2>
          <div className="flex gap-2">
            <div
              className="cursor-pointer rounded-full border border-gray-400 bg-white p-3"
              id="meh-prev"
            >
              <svg
                className="h-3 w-3 fill-gray-400 sm:h-6 sm:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.98531 1.09905C10.052 1.17174 10.1049 1.2581 10.141 1.35317C10.1771 1.44824 10.1956 1.55017 10.1956 1.6531C10.1956 1.75603 10.1771 1.85796 10.141 1.95303C10.1049 2.0481 10.052 2.13446 9.98531 2.20715L1.89928 11.0438L9.98531 19.8805C10.1197 20.0274 10.1953 20.2267 10.1953 20.4346C10.1953 20.6424 10.1197 20.8417 9.98531 20.9886C9.85087 21.1355 9.66853 21.2181 9.47841 21.2181C9.28829 21.2181 9.10595 21.1355 8.97151 20.9886L0.380017 11.5979C0.313342 11.5252 0.260443 11.4388 0.224349 11.3438C0.188256 11.2487 0.169678 11.1468 0.169678 11.0438C0.169678 10.9409 0.188256 10.839 0.224349 10.7439C0.260443 10.6488 0.313342 10.5625 0.380017 10.4898L8.97151 1.09905C9.03802 1.02617 9.11703 0.96835 9.20401 0.928899C9.29099 0.889448 9.38424 0.869141 9.47841 0.869141C9.57258 0.869141 9.66583 0.889448 9.75281 0.928899C9.83979 0.96835 9.9188 1.02617 9.98531 1.09905Z"
                ></path>
              </svg>
            </div>
            <div
              className="cursor-pointer rounded-full border border-primary-800 bg-white p-3"
              id="meh-next"
            >
              <svg
                className="h-3 w-3 fill-primary-800 sm:h-6 sm:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.284468 20.9879C0.217793 20.9152 0.164894 20.8288 0.1288 20.7337C0.0927067 20.6387 0.0741282 20.5367 0.0741282 20.4338C0.0741282 20.3309 0.0927067 20.229 0.1288 20.1339C0.164894 20.0388 0.217793 19.9525 0.284468 19.8798L8.3705 11.0431L0.284468 2.20642C0.150029 2.05947 0.0745039 1.86017 0.0745039 1.65236C0.0745039 1.44455 0.150029 1.24525 0.284468 1.09831C0.418905 0.951366 0.601242 0.868814 0.791366 0.868814C0.981489 0.868814 1.16383 0.951366 1.29826 1.09831L9.88976 10.489C9.95643 10.5617 10.0093 10.6481 10.0454 10.7432C10.0815 10.8382 10.1001 10.9402 10.1001 11.0431C10.1001 11.146 10.0815 11.2479 10.0454 11.343C10.0093 11.4381 9.95643 11.5244 9.88976 11.5971L1.29826 20.9879C1.23176 21.0607 1.15275 21.1186 1.06577 21.158C0.978786 21.1975 0.885539 21.2178 0.791366 21.2178C0.697192 21.2178 0.603945 21.1975 0.516963 21.158C0.429981 21.1186 0.350974 21.0607 0.284468 20.9879Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div id="meh-slider-container" className="w-full">
          <div {...innerBlocksProps}></div>
        </div>
      </div>
    </section>
  );
}
