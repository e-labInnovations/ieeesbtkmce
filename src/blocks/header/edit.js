import { useBlockProps } from "@wordpress/block-editor"
const { Fragment } = wp.element
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: "bg-gray-200 p-4 text-center"
	})

	return (
		<Fragment>
			<div {...blockProps}>
				<p className="text-xl font-semibold text-gray-800">Header Placeholder</p>
			</div>
		</Fragment>
	);
}
