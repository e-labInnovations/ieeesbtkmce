import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { content, image, linkObject } = attributes;

  return (
    <section>
      <div className="container mx-auto my-8 flex flex-col-reverse px-4 sm:flex-row md:my-16 xl:px-28">
        <div className="mt-6 flex w-full flex-col gap-6 sm:mt-0 sm:w-1/2">
          <h2 className="hidden font-poppins text-3xl text-primary-800 sm:block">
            EXURO
          </h2>
          <RichText.Content
            tagName="p"
            value={content}
            className="font-poppins text-base font-light text-black"
          />
          <div className="mt-auto flex flex-row">
            <a
              href={linkObject ? linkObject.url : "#"}
              className="rounded p-2 px-5 text-center text-primary-800 no-underline outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400"
            >
              View Last Year EXURO
            </a>
          </div>
        </div>
        <div className="flex w-full flex-col sm:w-1/2 sm:pl-14">
          <h2 className="mb-5 font-poppins text-3xl text-primary-800 sm:mb-6 sm:hidden">
            EXURO
          </h2>
          <div className="flex h-full max-h-full w-full items-center justify-center">
            {image && image.url ? (
              <img
                className="max-h-full w-full rounded-3xl object-contain"
                src={image.url}
                alt={image.alt}
              />
            ) : (
              <img
                className="max-h-full w-full rounded-3xl object-contain"
                src={themeData.theme_url + "/assets/images/exuro.png"}
                alt="Exuro"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
