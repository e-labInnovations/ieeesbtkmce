import { RichText, InnerBlocks, useBlockProps } from "@wordpress/block-editor"
import './editor.scss';
const { Fragment } = wp.element
import { __ } from '@wordpress/i18n'

export default function Edit({ attributes, setAttributes }) {
	const { title } = attributes
	const blockProps = useBlockProps({
		className: "flex flex-col px-12 sm:px-12 md:px-24 xl:px-48"
	})

	return (
		<Fragment>
			<div {...blockProps}>
				<RichText
					className="font-poppins my-5 text-3xl text-primary-800 sm:mb-6"
					tagName="h2"
					value={title}
					allowedFormats={[]}
					onChange={(title) => setAttributes({ title })}
					placeholder={__('Heading...')}
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					<InnerBlocks allowedBlocks={['ieeesbtkmce/services-item']} />
				</div>
			</div>
		</Fragment>
	);
}