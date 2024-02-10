import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { ieeeContent, ieeeKeralaContent, ieeeLink, ieeeKeralaLink } =
    attributes;

  return (
    <section>
      <div className="my-8 flex flex-col gap-6 sm:flex-row md:my-16">
        <div className="flex w-full flex-col gap-6 sm:w-1/2">
          <h2 className="font-poppins text-3xl text-primary-800">About IEEE</h2>
          <RichText.Content
            className="font-poppins text-base font-light text-black"
            tagName="p"
            value={ieeeContent}
          />
          <a
            href={ieeeLink && ieeeLink.url ? ieeeLink.url : "#"}
            className="mt-auto w-fit rounded bg-primary-800 p-2 px-6 text-center text-white transition-shadow hover:shadow-md hover:shadow-gray-400"
          >
            Visit Website
          </a>
        </div>
        <div className="flex w-full flex-col gap-6 sm:w-1/2">
          <h2 className="font-poppins text-3xl text-primary-800">
            About IEEE Kerala Section
          </h2>
          <RichText.Content
            className="font-poppins text-base font-light text-black"
            tagName="p"
            value={ieeeKeralaContent}
          />
          <a
            href={
              ieeeKeralaLink && ieeeKeralaLink.url ? ieeeKeralaLink.url : "#"
            }
            className="mt-auto w-fit rounded bg-primary-800 p-2 px-6 text-center text-white transition-shadow hover:shadow-md hover:shadow-gray-400"
          >
            Visit Website
          </a>
        </div>
      </div>
    </section>
  );
}
