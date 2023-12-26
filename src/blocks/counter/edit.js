import { InnerBlocks, useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor"
import './editor.scss';

export default function Edit({ attributes, setAttributes}) {
	const blockProps = useBlockProps({
		className: "flex flex-wrap w-full counters bg-[#F9F9F9] shadow-[inset_0_10px_10px_0px_rgba(0,0,0,0.1)] justify-around py-10 sm:py-12 lg:py-14 xl:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10"
	})

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks:['ieeesbtkmce/counter-item']
	})
	
	return (
		<div {...innerBlocksProps}>
		</div>
	);
}
