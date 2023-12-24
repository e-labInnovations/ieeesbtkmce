import { InspectorControls, __experimentalLinkControl as LinkControl, useBlockProps } from "@wordpress/block-editor"
import { PanelBody, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n'
import { useState } from '@wordpress/element'
const { Fragment } = wp.element
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { linkObject } = attributes
	const blockProps = useBlockProps({
		className: "bg-gray-200 p-4 text-center"
	})
	const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Join IEEE Button')}>
					<LinkControl settings={[]} value={linkObject} onChange={newLink => {console.log(newLink);setAttributes({ linkObject: newLink })}} />
					{/* <Button variant='primary' onClick={() => setIsLinkPickerVisible(false)} style={{ display: 'block', width: '100%' }}>Confirm Link</Button> */}
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<p className="text-xl font-semibold text-gray-800">Header Placeholder</p>
			</div>
		</Fragment>
	);
}
