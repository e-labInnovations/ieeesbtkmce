import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { content, societies } = attributes;
  const theme_url = themeData.theme_url;

  return (
    <section>
      <div className="container mx-auto my-8 flex flex-col gap-8 px-4 sm:flex-row sm:gap-24 md:my-16 xl:px-28">
        <div className="flex max-h-min w-full flex-col gap-6 sm:w-5/12">
          <h2 className="font-poppins text-3xl text-primary-800 sm:block">
            Trusted Among Global Organizations
          </h2>
          <RichText.Content
            tagName="p"
            value={content}
            className="font-poppins text-base font-light text-black"
          />
        </div>
        <div className="h-full w-full sm:w-7/12">
          <svg viewBox="0 0 640 580" className="w-full overflow-visible">
            <defs>
              <filter id="drop-shadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation={1} />
                <feOffset dx={1} dy={1} />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter
                id="drop-shadow-hover"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur in="SourceAlpha" stdDeviation={8} />
                <feOffset dx={0} dy={0} result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {Object.entries(societies).map(([societyName, society]) => {
                return (
                  <pattern
                    id={`society_${societyName}`}
                    x="0%"
                    y="0%"
                    height="100%"
                    width="100%"
                    viewBox="0 0 1 1"
                  >
                    <rect
                      width={1}
                      height={1}
                      className={`fill-${society.bg_color}`}
                    />

                    <image
                      xlinkHref={
                        society.image && society.image.url
                          ? society.image.url
                          : `${theme_url}/assets/images/societies/front/${societyName}.svg`
                      }
                      x="0.1"
                      y="0.1"
                      width="0.8"
                      height="0.8"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </pattern>
                );
              })}
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                .society-rect {\n                  filter: url(#drop-shadow);\n                  stroke-width: 0.25;\n                  filter: url(#drop-shadow);\n                  rx: 35;\n                }\n\n                .society-rect:hover {\n                  filter: url(#drop-shadow-hover);\n                }\n              ",
                }}
              />
            </defs>

            <a
              href={
                societies.pes.linkObject && societies.pes.linkObject.url
                  ? societies.pes.linkObject.url
                  : "#"
              }
            >
              <rect
                x="86.5958"
                y="7.1709"
                width={170}
                height={170}
                fill="url(#society_pes)"
                className="society-rect stroke-primary-800"
              />
            </a>
            <a
              href={
                societies.ras.linkObject && societies.ras.linkObject.url
                  ? societies.ras.linkObject.url
                  : "#"
              }
            >
              <rect
                x="272.491"
                y="7.1709"
                width={170}
                height={170}
                fill="url(#society_ras)"
                className="society-rect stroke-primary-800"
              />
            </a>
            <a
              href={
                societies.cs.linkObject && societies.cs.linkObject.url
                  ? societies.cs.linkObject.url
                  : "#"
              }
            >
              <rect
                x="458.387"
                y="7.1709"
                width={170}
                height={170}
                fill="url(#society_cs)"
                className="society-rect stroke-primary-800"
              />
            </a>
            <a
              href={
                societies.sight.linkObject && societies.sight.linkObject.url
                  ? societies.sight.linkObject.url
                  : "#"
              }
            >
              <rect
                x="10.9073"
                y="204.143"
                width={170}
                height={170}
                fill="url(#society_sight)"
                className="society-rect stroke-primary-800"
              />
            </a>
            <a
              href={
                societies.ias.linkObject && societies.ias.linkObject.url
                  ? societies.ias.linkObject.url
                  : "#"
              }
            >
              <rect
                x="196.803"
                y="204.143"
                width={170}
                height={170}
                fill="url(#society_ias)"
                className="society-rect stroke-primary-800"
              />
            </a>
            <a
              href={
                societies.sps.linkObject && societies.sps.linkObject.url
                  ? societies.sps.linkObject.url
                  : "#"
              }
            >
              <rect
                x="382.698"
                y="204.143"
                width={170}
                height={170}
                fill="url(#society_sps)"
                className="society-rect stroke-primary-800"
              />
            </a>
            <rect
              x="580.262"
              y="204.143"
              height={170}
              rx={35}
              fill="#006DA5"
              className="w-screen"
              filter="url(#drop-shadow)"
            />
            <a
              href={
                societies.wie.linkObject && societies.wie.linkObject.url
                  ? societies.wie.linkObject.url
                  : "#"
              }
            >
              <rect
                x="86.5958"
                y="401.115"
                width={170}
                height={170}
                fill="url(#society_wie)"
                className="society-rect stroke-primary-800"
              />
            </a>
            <a
              href={
                societies.cass.linkObject && societies.cass.linkObject.url
                  ? societies.cass.linkObject.url
                  : "#"
              }
            >
              <rect
                x="272.491"
                y="401.115"
                width={170}
                height={170}
                fill="url(#society_cass)"
                className="society-rect stroke-primary-800"
              />
            </a>
            <a
              href={
                societies.ies.linkObject && societies.ies.linkObject.url
                  ? societies.ies.linkObject.url
                  : "#"
              }
            >
              <rect
                x="458.387"
                y="401.115"
                width={170}
                height={170}
                fill="url(#society_ies)"
                className="society-rect stroke-primary-800"
              />
            </a>
          </svg>
        </div>
      </div>
    </section>
  );
}
