import { RichText} from "@wordpress/block-editor"

export default function save({ attributes }) {
	const { subTitle, content, image, linkObject } = attributes

    return (
        <div className="flex flex-col px-12 sm:flex-row sm:px-12 md:px-24 xl:px-48 ">
            <div className="flex w-full sm:w-1/2 p-3 sm:px-8 md:px-10 justify-center">
                <div className="flex bg-contain bg-no-repeat bg-center bg-[url('https://gcdnb.pbrd.co/images/PkifbtJpKNDA.png?o=1')] p-12 sm:p-8 lg:p-16 xl:p-18 h-">
                    {image && image.url ? (
                        <img src={image.url} className="rounded-full object-cover my-auto aspect-square w-full shadow-inner" alt={image.alt} />
                    ) : (
                        <img src="https://picsum.photos/600/600" className="rounded-full object-cover my-auto aspect-square w-full shadow-inner" alt="About Us Image" />
                    )}
                </div>
            </div>
            <div className="flex flex-col justify-center w-full sm:w-1/2 p-3">
                <h2 className="font-sans text-3xl my-5 sm:mb-6 text-primary-800">About Us</h2>
                <RichText.Content tagName="h3" value={subTitle} className="mb-1 text-xl sm:mb-2 md:mb-2" />
                <RichText.Content tagName="p" value={content} className="font-light" />
                <div className="mt-8 flex flex-row sm:mt-8 md:mt-10 xl:mt-12">
                    <a href={linkObject?linkObject.url : '#'} className="rounded p-2 px-5 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400 no-underline">More Details</a>
                </div>
            </div>
        </div>
    )
}
