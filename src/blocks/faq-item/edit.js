import { useBlockProps, InnerBlocks } from "@wordpress/block-editor"
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: "flex flex-row items-center justify-between rounded-[14px] border-[1px] border-gray-800 px-4 py-2"
	})
	return (
		<div {...blockProps}>
			<p className="text-left font-poppins text-base font-light text-black">1. Lorem ipsum dolor sit amet consectetur. In sed nisl erat quis ?</p>
			<div className>
				<svg xmlns="http://www.w3.org/2000/svg" width={37} height={37} viewBox="0 0 37 37" fill="none">
					<path d="M36.6983 18.1819C36.6983 8.26966 28.662 0.233398 18.7498 0.233398C8.83759 0.233398 0.801331 8.26966 0.801331 18.1819C0.801331 28.0941 8.83759 36.1304 18.7498 36.1304C28.662 36.1304 36.6983 28.0941 36.6983 18.1819ZM18.3486 26.0654C18.2198 25.9377 18.1175 25.7859 18.0474 25.6186C17.9773 25.4514 17.9409 25.272 17.9402 25.0906C17.9395 24.9093 17.9745 24.7296 18.0432 24.5618C18.1119 24.394 18.2131 24.2414 18.3408 24.1127L22.8555 19.5625H11.3288C10.9626 19.5625 10.6115 19.4171 10.3525 19.1582C10.0936 18.8992 9.94816 18.5481 9.94816 18.1819C9.94816 17.8157 10.0936 17.4645 10.3525 17.2056C10.6115 16.9467 10.9626 16.8012 11.3288 16.8012H22.8555L18.3408 12.2511C18.2131 12.1223 18.112 11.9695 18.0433 11.8016C17.9746 11.6337 17.9397 11.4539 17.9405 11.2725C17.9413 11.0911 17.9778 10.9116 18.048 10.7443C18.1182 10.577 18.2206 10.4252 18.3494 10.2975C18.4783 10.1698 18.631 10.0687 18.7989 10C18.9668 9.93134 19.1466 9.8964 19.328 9.8972C19.6944 9.89882 20.0451 10.0459 20.3031 10.3061L27.1537 17.2094C27.4103 17.468 27.5543 17.8176 27.5543 18.1819C27.5543 18.5462 27.4103 18.8958 27.1537 19.1544L20.3031 26.0576C20.1753 26.1867 20.0234 26.2892 19.856 26.3594C19.6886 26.4297 19.509 26.4662 19.3274 26.4669C19.1459 26.4676 18.966 26.4325 18.798 26.3636C18.63 26.2947 18.4773 26.1934 18.3486 26.0654Z" fill="#006DA5" />
				</svg>
			</div>
		</div>

	);
}