export default function save({ attributes }) {
  return (
    <div
      className="flex flex-col px-12 py-6 sm:flex-row sm:px-12 md:px-24 xl:px-48"
      id="latest-news-section"
    >
      <div className="flex flex-initial flex-col bg-white px-3 sm:w-2/5">
        <h2 className="font-sans text-3xl text-primary-800">Latest News</h2>
        <div className="mb-5 mt-5 sm:mb-5 md:mb-10 md:mt-8 xl:mb-12">
          <button type="button" className="" id="news-prev" data-carousel-prev>
            <span className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full outline outline-1 outline-gray-400 sm:h-10 sm:w-10">
              <svg
                className="h-5 w-5 text-gray-400 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </span>
          </button>

          <button type="button" className="" id="news-next" data-carousel-next>
            <span className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full outline outline-1 outline-primary-800 sm:h-10 sm:w-10">
              <svg
                className="h-5 w-5 text-primary-800 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <h3 className="mb-1 text-xl sm:mb-2 md:mb-2">Lorem Ipsum</h3>
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          libero perferendis minima?
        </p>
        <div className="mt-4 flex flex-row sm:mt-6 md:mt-12 xl:mt-16">
          <a
            href="#"
            className="mr-2 basis-1/2 rounded p-2 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400"
          >
            More Details
          </a>
          <a
            href="#"
            className="ml-2 basis-1/2 rounded bg-primary-800 p-2 text-center text-white transition-shadow hover:shadow-md hover:shadow-gray-400"
          >
            Register Now!
          </a>
        </div>
      </div>

      <div className="bg-red relative -mx-4 mt-6 flex h-64 justify-center p-3 sm:mx-0 sm:mt-0 sm:h-auto sm:w-3/5 sm:justify-normal">
        <img
          src="https://picsum.photos/id/12/340/400"
          className="news-front-img"
          alt="..."
        />
        <img
          src="https://picsum.photos/id/52/340/400"
          className="news-back-img"
          alt="..."
        />
        <img
          src="https://picsum.photos/id/32/340/400"
          className="news-hidden-back-img"
          alt="..."
        />
        <img
          src="https://picsum.photos/id/23/340/400"
          className="news-hidden-front-img"
          alt="..."
        />
      </div>
    </div>
  );
}
