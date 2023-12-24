import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor"
import './editor.scss';
import { PanelBody, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n'
const { Fragment } = wp.element

export default function Edit({ attributes, setAttributes }) {
	const { title, content, icon, color } = attributes
	const blockProps = useBlockProps({
		className: "flex flex-col shadow-sm"
	})
	const colors = [
		{ name: 'Turquoise', color: '#1ABC9C' },
		{ name: 'Royal Blue', color: '#3498DB' },
		{ name: 'Amethyst', color: '#9B59B6' },
		{ name: 'Wet Asphalt', color: '#34495E' },
		{ name: 'Sunflower', color: '#F1C40F' },
		{ name: 'Elegant Red', color: '#E74C3C' },
		{ name: 'Mango Tango', color: '#D35400' },
		{ name: 'Silver Grey', color: '#95A5A6' },
		{ name: 'Forest Green', color: '#228B22' },
		{ name: 'Lavender', color: '#E6E6FA' },
		{ name: 'Sky Blue', color: '#87CEEB' },
		{ name: 'Navy Blue', color: '#000080' },
		{ name: 'Dark Chocolate', color: '#37000A' },
		{ name: 'Coral', color: '#FF7F50' },
		{ name: 'Salmon', color: '#FA8072' },
		{ name: 'Midnight Blue', color: '#191970' },
		{ name: 'Charcoal', color: '#36454F' },
		{ name: 'Powder Blue', color: '#B0E0E6' },
		{ name: 'Mustard Yellow', color: '#FFDB58' },
		{ name: 'Orange Red', color: '#FF4500' },
		{ name: 'Lime Green', color: '#32CD32' },
		{ name: 'Teal', color: '#008080' },
	];

	// #1ABC9C, #3498DB, #9B59B6, #34495E, #F1C40F, #E74C3C, #D35400, #95A5A6

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Service Item')}>
					<ColorPalette
						colors={colors}
						value={color}
						onChange={(color) => setAttributes({ color })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<hr className="h-1 mb-6" style={{ backgroundColor: color }} />
				<div className="flex mx-5">
					<RichText
						className="text-black font-light text-balance mt-4 w-full"
						tagName="h3"
						value={title}
						allowedFormats={[]}
						onChange={(title) => setAttributes({ title })}
						placeholder={__('Title...')}
					/>
					<div className="ml-5">
						<i className="bi bi-android2" style={{ color: color, fontSize: '42px' }}></i>
					</div>
				</div>
				<RichText
					className="mx-5 mt-5  font-light text-gray-600 text-base"
					tagName="p"
					value={content}
					allowedFormats={[]}
					onChange={(content) => setAttributes({ content })}
					placeholder={__('Content...')}
				/>
			</div>
		</Fragment>
	);
}
