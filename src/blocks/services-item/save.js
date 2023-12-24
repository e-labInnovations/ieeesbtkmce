import { RichText } from "@wordpress/block-editor"

export default function save({ attributes }) {
	const { title, content, icon, color } = attributes

	return (
		<div className="flex flex-col shadow-sm">
			<hr className="h-1 mb-6" style={{ backgroundColor: color }} />
			<div className="flex mx-5">
				<RichText.Content tagName="h3" value={title} className="text-black font-light text-balance mt-4 w-full" />
				<div className="ml-5">
					<i className="bi bi-android2" style={{ color: color, fontSize: '42px' }}></i>
				</div>
			</div>
			<RichText.Content tagName="p" value={content} className="mx-5 mt-5  font-light text-gray-600 text-base" />
		</div>
	);
}
