import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor"
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element'
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const selectedBlock = useSelect(
		(select) => select('core/block-editor').getSelectedBlock()
	);

	const [answer, setAnswer] = useState("")

	useEffect(() => {
		if (selectedBlock && selectedBlock.name == "ieeesbtkmce/faq-item") {
		} else {
			setAnswer("")
		}
	}, [selectedBlock]);

	const blockProps = useBlockProps({
		className: "w-full px-12 text-center lg:px-48 my-6 lg:my-12"
	})

	const blockProps2 = useBlockProps({
		className: "flex w-full flex-col gap-4"
	})

	const innerBlocksProps = useInnerBlocksProps(blockProps2, {
		allowedBlocks: ['ieeesbtkmce/faq-item'],
	});

	return (
		<div {...blockProps}>
			<h2 className="font-poppins text-4xl font-normal text-primary-800 py-8">Frequently Asked Questions</h2>
			<div className="flex flex-col sm:flex-row">
				<div className="m-2 w-full sm:w-2/3">
					<div {...innerBlocksProps}>
						
					</div>
				</div>
				<div className="m-2 w-full sm:w-1/3 flex items-center">
					<div className="flex w-full items-center justify-center rounded-[14px] border-[3px] border-primary-800 px-3 py-6">
						<p className="font-poppins text-base font-light text-black">
							{answer? (
								answer
							) : (
								"Lorem ipsum dolor sit amet consectetur. Aenean nisi arcu ac at vulputate mauris ullamcorper. Eu cursus nec etiam lacus egestas lacus phasellus praesent. Convallis facilisis aliquam massa cursus. Diam in aliquam euismod orci gravida eu ridiculus a venenatis. Amet faucibus tempor nisl ligula."
							)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
