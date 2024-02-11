import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { content, image, websiteLink } = attributes;

  return (
    <section>
      <div className="my-8 flex flex-col gap-6 sm:flex-row md:my-16">
        <div className="flex w-full flex-col gap-6 sm:w-1/2">
          <h2 className="font-poppins text-3xl text-primary-800">
            About TKM College of Engineering
          </h2>
          <RichText.Content
            className="font-poppins text-base font-light text-black"
            tagName="p"
            value={content}
          />
          <a
            href={websiteLink && websiteLink.url ? websiteLink.url : "#"}
            className="w-fit rounded bg-primary-800 p-2 px-6 text-center text-white transition-shadow hover:shadow-md hover:shadow-gray-400"
          >
            Visit Website
          </a>
        </div>
        <div className="flex w-full flex-col gap-6 sm:w-1/2">
          <img
            src={
              image && image.url
                ? image.url
                : `${themeData.theme_url}/assets/images/about-1.jpg`
            }
            className="w-full rounded-xl"
            alt={image && image.alt ? image.alt : ""}
          />
        </div>
      </div>
    </section>
  );
}
