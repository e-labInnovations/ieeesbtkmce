import {
  useBlockProps,
  useInnerBlocksProps,
  RichText,
} from "@wordpress/block-editor";
import { selectBlock } from "@wordpress/blocks";
import { useSelect, dispatch } from "@wordpress/data";
import { Fragment, useState, useEffect } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
  const { activeItem, title, content, registerLink, detailsLink } = attributes;
  const blockProps = useBlockProps();
  const [currentItemPos, setCurrentItemPos] = useState(0);

  const selectedBlock = useSelect((select) => {
    let currentSelection = select("core/block-editor").getSelectedBlock();
    return currentSelection ? currentSelection : null;
  });

  const innerBlocks = useSelect(
    (select) => select("core/block-editor").getBlocks(clientId),
    [clientId],
  );

  const selectInnerBlock = (innerBlock = null) => {
    innerBlock = innerBlock ? innerBlock : innerBlocks[currentItemPos];

    setAttributes({
      activeItem: innerBlock.clientId,
      title: innerBlock.attributes.title || "",
      content: innerBlock.attributes.content || "",
      registerLink: innerBlock.attributes.registerLink || null,
      detailsLink: innerBlock.attributes.detailsLink || null,
    });
  };

  useEffect(() => {
    selectInnerBlock();
  }, []);

  useEffect(() => {
    if (selectedBlock && selectedBlock.name == "ieeesbtkmce/latest-news-item") {
      selectInnerBlock(selectedBlock);
      console.log("selectedBlock:", selectedBlock);
    }
  }, [selectedBlock]);

  const doNext = () => {
    let newPosition = currentItemPos + 1;
    newPosition = newPosition >= innerBlocks.length ? 0 : newPosition;
    setCurrentItemPos(newPosition);
    selectInnerBlock(innerBlocks[newPosition]);
  };

  const doPrev = () => {
    let newPosition = currentItemPos - 1;
    newPosition = newPosition < 0 ? innerBlocks.length - 1 : newPosition;
    setCurrentItemPos(newPosition);
    selectInnerBlock(innerBlocks[newPosition]);
  };

  //ToDo : implement register and details links

  const blockProps2 = useBlockProps({
    className: "relative flex h-64 w-full sm:mx-0 sm:mt-0",
  });

  const innerBlocksProps = useInnerBlocksProps(blockProps2, {
    allowedBlocks: ["ieeesbtkmce/latest-news-item"],
  });

  return (
    <section {...blockProps}>
      <div
        className="container mx-auto my-8 flex flex-col-reverse gap-4 px-4 sm:flex-row md:my-16 xl:px-28"
        id="latest-news-section"
      >
        <div className="flex flex-initial flex-col gap-4 sm:h-auto sm:w-5/12 sm:gap-6 sm:pb-5 sm:pr-12">
          <h2 className="hidden font-sans text-3xl text-primary-800 sm:block">
            Latest News
          </h2>
          <div className="flex gap-2">
            <button
              onClick={doNext}
              className="rounded-full border border-primary-800 bg-white p-3"
              id="news-next"
            >
              <svg
                className="h-3 w-3 fill-primary-800 sm:h-4 sm:w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.98531 1.09905C10.052 1.17174 10.1049 1.2581 10.141 1.35317C10.1771 1.44824 10.1956 1.55017 10.1956 1.6531C10.1956 1.75603 10.1771 1.85796 10.141 1.95303C10.1049 2.0481 10.052 2.13446 9.98531 2.20715L1.89928 11.0438L9.98531 19.8805C10.1197 20.0274 10.1953 20.2267 10.1953 20.4346C10.1953 20.6424 10.1197 20.8417 9.98531 20.9886C9.85087 21.1355 9.66853 21.2181 9.47841 21.2181C9.28829 21.2181 9.10595 21.1355 8.97151 20.9886L0.380017 11.5979C0.313342 11.5252 0.260443 11.4388 0.224349 11.3438C0.188256 11.2487 0.169678 11.1468 0.169678 11.0438C0.169678 10.9409 0.188256 10.839 0.224349 10.7439C0.260443 10.6488 0.313342 10.5625 0.380017 10.4898L8.97151 1.09905C9.03802 1.02617 9.11703 0.96835 9.20401 0.928899C9.29099 0.889448 9.38424 0.869141 9.47841 0.869141C9.57258 0.869141 9.66583 0.889448 9.75281 0.928899C9.83979 0.96835 9.9188 1.02617 9.98531 1.09905Z"
                />
              </svg>
            </button>
            <button
              onClick={doPrev}
              className="rounded-full border border-primary-800 bg-white p-3"
              id="news-prev"
            >
              <svg
                className="h-3 w-3 fill-primary-800 sm:h-4 sm:w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.284468 20.9879C0.217793 20.9152 0.164894 20.8288 0.1288 20.7337C0.0927067 20.6387 0.0741282 20.5367 0.0741282 20.4338C0.0741282 20.3309 0.0927067 20.229 0.1288 20.1339C0.164894 20.0388 0.217793 19.9525 0.284468 19.8798L8.3705 11.0431L0.284468 2.20642C0.150029 2.05947 0.0745039 1.86017 0.0745039 1.65236C0.0745039 1.44455 0.150029 1.24525 0.284468 1.09831C0.418905 0.951366 0.601242 0.868814 0.791366 0.868814C0.981489 0.868814 1.16383 0.951366 1.29826 1.09831L9.88976 10.489C9.95643 10.5617 10.0093 10.6481 10.0454 10.7432C10.0815 10.8382 10.1001 10.9402 10.1001 11.0431C10.1001 11.146 10.0815 11.2479 10.0454 11.343C10.0093 11.4381 9.95643 11.5244 9.88976 11.5971L1.29826 20.9879C1.23176 21.0607 1.15275 21.1186 1.06577 21.158C0.978786 21.1975 0.885539 21.2178 0.791366 21.2178C0.697192 21.2178 0.603945 21.1975 0.516963 21.158C0.429981 21.1186 0.350974 21.0607 0.284468 20.9879Z"
                />
              </svg>
            </button>
          </div>
          <div className="mb-auto flex flex-col gap-1 sm:gap-2">
            <RichText
              className="text-xl"
              id="active-news-title"
              tagName="h3"
              value={title}
              onChange={(title) => setAttributes({ title })}
              placeholder={"Title..."}
              allowedFormats={[]}
            />
            <RichText
              className="font-light"
              id="active-news-content"
              tagName="h3"
              value={content}
              onChange={(content) => setAttributes({ content })}
              placeholder={"Content..."}
            />
          </div>
          <div className="flex flex-row">
            <a
              id="active-news-details"
              href="#"
              className="mr-2 basis-1/2 rounded p-2 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400"
            >
              More Details
            </a>
            <a
              id="active-news-register"
              href="#"
              className="ml-2 basis-1/2 rounded bg-primary-800 p-2 text-center text-white transition-shadow hover:shadow-md hover:shadow-gray-400"
            >
              Register Now!
            </a>
          </div>
        </div>
        <div className="mt-6 flex w-full flex-col gap-6 sm:mx-0 sm:mt-0 sm:w-7/12">
          <h2 className="font-sans text-3xl text-primary-800 sm:hidden">
            Latest News
          </h2>
          <div {...innerBlocksProps}>
            {/* <div className="news-item hidden">
              <img
                src="https://picsum.photos/id/12/340/400"
                className="h-full max-h-full rounded-xl"
                alt=""
              />
              <p
                className="hidden"
                data-title="This is a title1"
                data-details-url="/home"
                data-register-url="#"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="news-item hidden">
              <img
                src="https://picsum.photos/id/18/340/400"
                className="h-full max-h-full rounded-xl"
                alt=""
              />
              <p
                className="hidden"
                data-title="This is a title2"
                data-details-url="#"
                data-register-url="/somelink"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia assumenda vitae magni culpa dolor vel ex saepe
                recusandae sit, consectetur esse tempore a doloribus velit,
                alias tempora, officia at sapiente.
              </p>
            </div>
            <div className="news-item hidden3">
              <img
                src="https://picsum.photos/id/17/340/400"
                className="h-full max-h-full rounded-xl"
                alt=""
              />
              <p
                className="hidden"
                data-title="This is a title4"
                data-details-url="#"
                data-register-url="#"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias voluptate facere, officiis voluptas id esse
                perferendis consequatur velit quod aperiam facilis quidem fugit
                optio
              </p>
            </div>
            <div className="news-item hidden">
              <img
                src="https://picsum.photos/id/15/340/400"
                className="h-full max-h-full rounded-xl"
                alt=""
              />
              <p
                className="hidden"
                data-title="This is a title5"
                data-details-url="#"
                data-register-url="#"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt libero perferendis minima? lore
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
