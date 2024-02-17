import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { bgImage, heading, subHeading, buttonLink } = attributes;

  return (
    <section className="front-banner relative flex h-screen w-full bg-gray-300">
      <div
        id="hero-bg"
        className="flex h-screen w-screen"
        style={{
          backgroundImage: `url("${
            bgImage && bgImage.url
              ? bgImage.url
              : `${themeData.theme_url}/assets/images/hero-bg.jpg`
          }")`,
        }}
      >
        <canvas id="hero-canvas" />
        <div className="absolute left-1/2 top-1/2 m-auto mt-10 flex w-10/12 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-8 text-center font-poppins text-white md:w-8/12 lg:w-7/12">
          <RichText.Content
            className="text-3xl font-bold md:text-4xl"
            tagName="h1"
            value={heading}
          />
          <RichText.Content
            className="text-3xl font-light uppercase md:text-4xl"
            tagName="h2"
            value={subHeading}
          />
          <a
            href={buttonLink && buttonLink.url ? buttonLink.url : "#"}
            target="_blank"
            className="my-8 px-8 py-1 outline outline-1 outline-white hover:bg-black/50"
          >
            JOIN IEEE
          </a>
        </div>
      </div>
    </section>
  );
}
