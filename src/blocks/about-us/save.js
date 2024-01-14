import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { subTitle, content, image, linkObject } = attributes;

  return (
    <section>
      <div className="container mx-auto my-8 flex flex-col gap-6 px-4 sm:flex-row xl:px-28">
        <div className="flex w-full flex-col gap-6 sm:w-1/2">
          <h2 className="my-5 font-sans text-3xl text-primary-800 sm:mb-6 sm:hidden">
            About Us
          </h2>
          <div className="flex w-full justify-center px-16 sm:px-0">
            <div
              className="flex bg-contain bg-center bg-no-repeat p-12 sm:p-8 lg:p-16"
              style={{
                backgroundImage: `url('${
                  themeData.theme_url + "/assets/images/about-bg.png"
                }')`,
              }}
            >
              {image && image.url ? (
                <img
                  src={image.url}
                  className="my-auto aspect-square w-full rounded-full object-cover shadow-inner"
                  alt={image.alt}
                />
              ) : (
                <img
                  src={themeData.theme_url + "/assets/images/about-1.jpg"}
                  className="my-auto aspect-square w-full rounded-full object-cover shadow-inner"
                  alt="About Us Image"
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center sm:w-1/2 sm:p-3">
          <h2 className="my-5 hidden font-sans text-3xl text-primary-800 sm:mb-6 sm:block">
            About Us
          </h2>
          <RichText.Content
            tagName="h3"
            value={subTitle}
            className="mb-1 text-xl sm:mb-2 md:mb-2"
          />
          <RichText.Content
            tagName="p"
            value={content}
            className="font-light"
          />
          <div className="mt-8 flex flex-row sm:mt-8 md:mt-10 xl:mt-12">
            <a
              href={linkObject ? linkObject.url : "#"}
              className="rounded p-2 px-5 text-center text-primary-800 no-underline outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400"
            >
              More Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
