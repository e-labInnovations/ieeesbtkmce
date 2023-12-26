import { useBlockProps } from "@wordpress/block-editor"
// import { ServerSideRender } from '@wordpress/server-side-render';
import ServerSideRender from '@wordpress/server-side-render';
const { Fragment } = wp.element
import './editor.scss';
import metadata from './block.json';

const Placeholder = () => {
	return (
		<div className="bg-gray-200 p-4 text-center">
			<p className="text-xl font-semibold text-gray-800">Header Placeholder</p>
		</div>
	)
}

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps()

	return (
		<Fragment>
			<div {...blockProps}>
				<ServerSideRender
					block={metadata.name}
					LoadingResponsePlaceholder={Placeholder}
				/>
			</div>
		</Fragment>
	);
}
