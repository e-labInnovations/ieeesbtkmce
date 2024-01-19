import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { vision, missionStart, missionList } = attributes;

  return (
    <section>
      <div className="container mx-auto my-8 flex flex-col gap-6 px-2 md:my-16 md:flex-row xl:px-28">
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="flex w-full items-center gap-4">
            <h3 className="text-xl text-primary-800">Our Vision</h3>
            <hr className="h-0.5 flex-grow border-0 bg-primary-700" />
          </div>
          <div className="mb-auto w-full">
            <RichText.Content
              className="text-base font-light text-black"
              tagName="p"
              value={vision}
            />
          </div>
          <hr className="h-px max-h-px flex-grow border-0 bg-primary-700" />
        </div>
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="flex w-full items-center gap-4">
            <h3 className="text-xl text-primary-800">Our Mission</h3>
            <hr className="h-0.5 flex-grow border-0 bg-primary-700" />
          </div>
          <div className="mb-auto w-full text-base font-light  text-black">
            <RichText.Content
              className="mb-4"
              tagName="p"
              value={missionStart}
            />
            <div className="mission">
              <RichText.Content
                tagName="ul"
                multiline="li"
                value={missionList}
              />
            </div>
          </div>
          <hr className="h-px  max-h-px flex-grow border-0 bg-primary-700" />
        </div>
      </div>
    </section>
  );
}
