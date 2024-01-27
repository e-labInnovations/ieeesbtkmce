import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { gallery, quotes } = attributes;
  const theme_url = themeData.theme_url;

  return (
    <section>
      <div className="container mx-auto my-8 grid h-screen grid-cols-12 grid-rows-6 gap-1 px-4 md:my-16 md:grid-cols-7 md:grid-rows-5 md:gap-4 xl:px-28">
        <div
          className=" col-span-8 col-start-1 row-span-1 row-start-1 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1"
          style={{
            backgroundImage:
              gallery && gallery[0] && gallery[0].url
                ? `url("${gallery[0].url}")`
                : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`,
          }}
        />
        <div
          className=" col-span-9 col-start-4 row-span-1 row-start-3 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-1"
          style={{
            backgroundImage:
              gallery && gallery[1] && gallery[1].url
                ? `url("${gallery[1].url}")`
                : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`,
          }}
        />
        <div className="col-span-6 col-start-4 row-span-1 row-start-2 rounded-lg bg-gray-100 p-2 md:col-span-2 md:col-start-5 md:row-span-1 md:row-start-1">
          <div className="flex h-full flex-col">
            <div className="overflow-x-hidden overflow-y-hidden">
              <RichText.Content
                className="marquee font-poppins text-sm font-light italic md:text-base"
                tagName="p"
                value={quotes[0].content}
              />
            </div>
            <div className="my-auto">
              <RichText.Content
                className="mt-1 font-poppins text-sm font-medium leading-none md:text-base"
                tagName="h4"
                value={quotes[0].author}
              />
              <RichText.Content
                className="text-sm font-light leading-none"
                tagName="span"
                value={quotes[0].designation}
              />
            </div>
          </div>
        </div>
        <div
          className="col-span-3 col-start-10 row-span-1 row-start-2 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-7 md:row-span-1 md:row-start-1"
          style={{
            backgroundImage:
              gallery && gallery[2] && gallery[2].url
                ? `url("${gallery[2].url}")`
                : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`,
          }}
        />
        <div
          className="col-span-3 col-start-1 row-span-2 row-start-2 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-3 md:row-span-4 md:row-start-2"
          style={{
            backgroundImage:
              gallery && gallery[3] && gallery[3].url
                ? `url("${gallery[3].url}")`
                : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`,
          }}
        />
        <div
          className="col-span-8 col-start-5 row-span-1 row-start-4 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-3 md:col-start-4 md:row-span-2 md:row-start-2"
          style={{
            backgroundImage:
              gallery && gallery[4] && gallery[4].url
                ? `url("${gallery[4].url}")`
                : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`,
          }}
        />
        <div className="col-span-4 col-start-1 row-span-1 row-start-4 rounded-lg bg-gray-100 p-2 md:col-span-1 md:col-start-7 md:row-span-2 md:row-start-2">
          <div className="flex h-full flex-col">
            <div className="overflow-x-hidden overflow-y-hidden">
              <RichText.Content
                className="marquee font-poppins text-sm font-light italic md:text-base"
                tagName="p"
                value={quotes[1].content}
              />
            </div>
            <div className="my-auto">
              <RichText.Content
                className="mt-1 font-poppins text-sm font-medium leading-none md:text-base"
                tagName="h4"
                value={quotes[1].author}
              />
              <RichText.Content
                className="text-sm font-light leading-none"
                tagName="span"
                value={quotes[1].designation}
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 col-start-9 row-span-1 row-start-1 rounded-lg bg-gray-100 p-2 md:col-span-2 md:col-start-1 md:row-span-1 md:row-start-3">
          <div className="flex h-full flex-col">
            <div className="overflow-x-hidden overflow-y-hidden">
              <RichText.Content
                className="marquee font-poppins text-sm font-light italic md:text-base"
                tagName="p"
                value={quotes[2].content}
              />
            </div>
            <div className="my-auto">
              <RichText.Content
                className="mt-1 font-poppins text-sm font-medium leading-none md:text-base"
                tagName="h4"
                value={quotes[2].author}
              />
              <RichText.Content
                className="text-sm font-light leading-none"
                tagName="span"
                value={quotes[2].designation}
              />
            </div>
          </div>
        </div>
        <div
          className="col-span-9 col-start-1 row-span-1 row-start-6 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-4"
          style={{
            backgroundImage:
              gallery && gallery[5] && gallery[5].url
                ? `url("${gallery[5].url}")`
                : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`,
          }}
        />
        <div className="col-span-3 col-start-10 row-span-2 row-start-5 rounded-lg bg-gray-100 p-2 md:col-span-2 md:col-start-4 md:row-span-2 md:row-start-4">
          <div className="flex h-full flex-col">
            <div className="overflow-x-hidden overflow-y-hidden">
              <RichText.Content
                className="marquee font-poppins text-sm font-light italic md:text-base"
                tagName="p"
                value={quotes[3].content}
              />
            </div>
            <div className="my-auto">
              <RichText.Content
                className="mt-1 font-poppins text-sm font-medium leading-none md:text-base"
                tagName="h4"
                value={quotes[3].author}
              />
              <RichText.Content
                className="text-sm font-light leading-none"
                tagName="span"
                value={quotes[3].designation}
              />
            </div>
          </div>
        </div>
        <div
          className="col-span-3 col-start-1 row-span-1 row-start-5 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-6 md:row-span-2 md:row-start-4"
          style={{
            backgroundImage:
              gallery && gallery[6] && gallery[6].url
                ? `url("${gallery[6].url}")`
                : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`,
          }}
        />
        <div
          className="col-span-6 col-start-4 row-span-1 row-start-5 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-7 md:row-span-2 md:row-start-4"
          style={{
            backgroundImage:
              gallery && gallery[7] && gallery[7].url
                ? `url("${gallery[7].url}")`
                : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`,
          }}
        />
      </div>
    </section>
  );
}
