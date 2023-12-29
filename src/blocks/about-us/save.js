import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { subTitle, content, image, linkObject } = attributes;

  return (
    <div className="flex flex-col px-12 sm:flex-row sm:px-12 md:px-24 xl:px-48 ">
      <div className="flex w-full justify-center p-3 sm:w-1/2 sm:px-8 md:px-10">
        <div className="flex bg-[url('https://gcdnb.pbrd.co/images/PkifbtJpKNDA.png?o=1')] bg-contain bg-center bg-no-repeat p-12 sm:p-8 lg:p-16">
          {image && image.url ? (
            <img
              src={image.url}
              className="my-auto aspect-square w-full rounded-full object-cover shadow-inner"
              alt={image.alt}
            />
          ) : (
            <img
              src="https://picsum.photos/600/600"
              className="my-auto aspect-square w-full rounded-full object-cover shadow-inner"
              alt="About Us Image"
            />
          )}
        </div>
      </div>
      <div className="flex w-full flex-col justify-center p-3 sm:w-1/2">
        <h2 className="my-5 font-sans text-3xl text-primary-800 sm:mb-6">
          About Us
        </h2>
        <RichText.Content
          tagName="h3"
          value={subTitle}
          className="mb-1 text-xl sm:mb-2 md:mb-2"
        />
        <RichText.Content tagName="p" value={content} className="font-light" />
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
  );
}
