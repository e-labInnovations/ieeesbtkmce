import { useBlockProps } from "@wordpress/block-editor"
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: "bg-gray-200 p-4 text-center"
	})
	return (
		<div {...blockProps}>
			<p className="text-xl font-semibold text-gray-800">Footer Placeholder</p>
		</div>
	);
}
