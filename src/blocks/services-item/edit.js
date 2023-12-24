import { RichText, useBlockProps } from "@wordpress/block-editor"
import './editor.scss';
const { Fragment } = wp.element
import { __ } from '@wordpress/i18n'

export default function Edit({ attributes, setAttributes }) {
	const { title, content, icon, color } = attributes
	const blockProps = useBlockProps({
		className: "flex flex-col"
	})

	return (
		<div {...blockProps}>
			<hr className="h-1 mb-6" style={{ backgroundColor: '#1ABC9C' }} />
			<div className="flex mx-5">
				<RichText
					className="text-black font-light text-balance mt-4"
					tagName="h3"
					value={title}
					allowedFormats={[]}
					onChange={(title) => setAttributes({ title })}
					placeholder={__('Title...')}
				/>
				{/* <h3 className="text-black font-light text-balance mt-4">Technical Publications</h3> */}
				<div className="ml-5">
					<i class="bi bi-android2"></i>
				</div>
			</div>
			{/* <p className="mx-5 mt-5  font-light text-gray-600 text-base">
				Lorem ipsum dolor sit amet consectetur. In non nibh tempor accumsan.
			</p> */}
			<RichText
				className="mx-5 mt-5  font-light text-gray-600 text-base"
				tagName="p"
				value={content}
				allowedFormats={[]}
				onChange={(content) => setAttributes({ content })}
				placeholder={__('Content...')}
			/>
		</div>
	);
}
