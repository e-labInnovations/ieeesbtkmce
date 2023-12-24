import { RichText } from "@wordpress/block-editor"

export default function save({ attributes }) {
	const { title, content, icon, color } = attributes

	return (
		<div className="flex flex-col shadow-sm">
			<hr className="h-1 mb-2" style={{ backgroundColor: color }} />
			<div className="flex mx-5">
				<RichText.Content tagName="h3" value={title} className="text-black font-light text-balance mt-6 w-full lg:min-h-[3.6] xl:min-h-[4.6rem] 2xl:min-h-0" />
				<div className="ml-5">
					<img src={`data:image/svg+xml;utf8,${encodeURIComponent(icon)}`} className="w-12 h-12" alt={title} />
				</div>
			</div>
			<RichText.Content tagName="p" value={content} className="mx-5 my-4  font-light text-gray-600 text-base" />
		</div>
	);
}
