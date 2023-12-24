import { useBlockProps } from "@wordpress/block-editor"
import './editor.scss';

export default function Edit({ attributes, setAttributes}) {
	const blockProps = useBlockProps()
	return (
		<h1 {...blockProps}>Test block</h1>
	);
}
