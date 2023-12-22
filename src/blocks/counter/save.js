import { InnerBlocks } from "@wordpress/block-editor"

export default function save({ attributes }) {
	return (
		<div className="flex flex-wrap w-full counters bg-[#F9F9F9] shadow-[inset_0_0_10px_0px_rgba(0,0,0,0.3)] justify-around py-10 sm:py-12 lg:py-14 xl:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
            <InnerBlocks.Content />
        </div>
	);
}
