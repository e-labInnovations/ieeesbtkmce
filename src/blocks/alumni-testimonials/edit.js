import { RichText, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { defaultContent } = attributes;
  const blockProps = useBlockProps({
    className: "alumni-testimonials",
  });

  return (
    <section {...blockProps}>
      <div className="container mx-auto my-8 flex flex-col-reverse gap-8 px-4 sm:flex-row md:my-16 xl:px-28">
        <div className="flex h-full w-full items-center sm:w-1/2">
          <svg viewBox="0 0 500 500" className="w-full">
            <circle cx="204.14" cy="189.94" fill="#006EA6" r="69.024" />
            <circle cx="320.57" cy="305.4" fill="#006EA6" r="49.995" />
            <circle cx="185.55" cy="331.82" fill="#006EA6" r="47.469" />
            <circle cx="437.99" cy="323.02" fill="#006EA6" r="41.307" />
            <circle cx="325.46" cy="143.95" fill="#006EA6" r="41.307" />
            <circle cx="192.39" cy="62.74" fill="#006EA6" r="37.679" />
            <circle cx="69.11" cy="308.34" fill="#006EA6" r="36.683" />
            <circle cx="259.9" cy="440.43" fill="#006EA6" r="35.14" />
            <circle cx="134.66" cy="423.8" fill="#006EA6" r="33.427" />
            <circle cx="442.88" cy="160.59" fill="#006EA6" r="23.912" />
            <circle cx="373.41" cy="418.91" fill="#006EA6" r="27.875" />
            <circle cx="39.75" cy="216.37" fill="#006EA6" r="24.352" />
            <circle cx="71.06" cy="135.15" fill="#006EA6" r="23.912" />
            <circle cx="384.17" cy="217.34" fill="#006EA6" r="21.906" />
            <circle cx="389.07" cy="80.36" fill="#006EA6" r="15.652" />
            <circle cx="296.11" cy="51.98" fill="#006EA6" r="14.46" />
            <circle cx="464.4" cy="242.78" fill="#006EA6" r="11.451" />
            <circle cx="105.31" cy="221.26" fill="#006EA6" r="10.024" />
            <circle cx="278.5" cy="375.86" fill="#006EA6" r="10.024" />
            <circle cx="305.89" cy="225.17" fill="#006EA6" r="10.024" />
          </svg>
        </div>
        <div className="flex w-full flex-col items-center text-base sm:w-1/2">
          <h2 className="pb-5 text-center font-poppins text-3xl text-primary-800 sm:py-10">
            What our Alumni Says
          </h2>
          <div className="pb-8">
            <svg
              width={64}
              height={58}
              viewBox="0 0 64 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M57.1741 57.0337C58.8317 57.0337 60.4214 56.3752 61.5935 55.2031C62.7656 54.031 63.4241 52.4413 63.4241 50.7837V35.5212C63.4241 33.8636 62.7656 32.2739 61.5935 31.1018C60.4214 29.9297 58.8317 29.2712 57.1741 29.2712H48.4991C48.4991 27.0774 48.6303 24.8774 48.8866 22.6837C49.2741 20.3587 49.9241 18.2899 50.8241 16.4837C51.7303 14.6712 52.8928 13.2524 54.3178 12.2149C55.7366 11.0524 57.5428 10.4712 59.7428 10.4712V0.783691C56.1241 0.783691 52.9616 1.55869 50.2428 3.10869C47.5477 4.64298 45.2306 6.76152 43.4616 9.30869C41.6861 12.1169 40.3775 15.1943 39.5866 18.4212C38.7896 21.9822 38.3996 25.6222 38.4241 29.2712V50.7837C38.4241 52.4413 39.0825 54.031 40.2546 55.2031C41.4267 56.3752 43.0165 57.0337 44.6741 57.0337H57.1741ZM19.6741 57.0337C21.3317 57.0337 22.9214 56.3752 24.0935 55.2031C25.2656 54.031 25.9241 52.4413 25.9241 50.7837V35.5212C25.9241 33.8636 25.2656 32.2739 24.0935 31.1018C22.9214 29.9297 21.3317 29.2712 19.6741 29.2712H10.9991C10.9991 27.0774 11.1303 24.8774 11.3866 22.6837C11.7741 20.3587 12.4241 18.2899 13.3241 16.4837C14.2303 14.6712 15.3928 13.2524 16.8178 12.2149C18.2366 11.0524 20.0428 10.4712 22.2428 10.4712V0.783691C18.6241 0.783691 15.4616 1.55869 12.7428 3.10869C10.0477 4.64298 7.73057 6.76152 5.96156 9.30869C4.18609 12.1169 2.87746 15.1943 2.08656 18.4212C1.28959 21.9822 0.899595 25.6222 0.924057 29.2712V50.7837C0.924057 52.4413 1.58254 54.031 2.75464 55.2031C3.92674 56.3752 5.51645 57.0337 7.17406 57.0337H19.6741Z"
                fill="#E0E0E0"
              />
            </svg>
          </div>
          <RichText
            className="text-center font-poppins text-base font-light text-black"
            tagName="p"
            id="at-content"
            value={defaultContent}
            allowedFormats={["core/bold", "core/italic"]}
            onChange={(defaultContent) => setAttributes({ defaultContent })}
            placeholder={"Default content..."}
          />
          <h2
            id="at-name"
            className="invisible pt-8 text-center font-poppins text-xl font-light italic text-black"
          >
            John Mathew
          </h2>
          <h3
            id="at-batch"
            className="invisible text-center font-poppins text-base font-[275] italic text-black"
          >
            Batch 2023-24
          </h3>
        </div>
      </div>
    </section>
  );
}
