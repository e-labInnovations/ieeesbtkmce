import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';
import './style.scss';

const attributes = {
	title: {
		type: "String",
		source: 'html',
		selector: 'h3'
	},
	content: {
		type: "String",
		source: 'html',
		selector: 'p',
		default: 'Lorem ipsum dolor sit amet consectetur. In non nibh tempor accumsan.'
	},
	icon: {
		type: "String",
		default: `<svg xmlns="http://www.w3.org/2000/svg" width="41" height="43" viewBox="0 0 41 43" fill="none">
		<g clip-path="url(#clip0_35_52)">
		  <path d="M38.998 34.7649H38.6253C37.9613 34.1272 37.5839 33.2411 37.5839 32.3014C37.5839 31.3617 37.9613 30.4756 38.6252 29.838H38.998C39.5323 29.838 40.035 29.6245 40.4133 29.237C40.7917 28.8494 41 28.3346 41 27.7873C41 26.6565 40.1019 25.7365 38.998 25.7365H37.1578C37.3674 25.5726 37.5683 25.3945 37.758 25.2003C38.8747 24.0562 39.487 22.535 39.4817 20.9168C39.4717 17.7982 37.1008 15.2275 34.0889 14.9351C34.1777 14.7094 34.2247 14.4661 34.2247 14.2151C34.2247 13.1554 33.3833 12.2932 32.3492 12.2932H32.0312C31.4475 11.7244 31.1159 10.9392 31.1159 10.1068C31.1159 9.27416 31.4476 8.48879 32.0316 7.92007H32.3492C32.8491 7.92007 33.3199 7.72057 33.6763 7.35684C34.0299 6.99336 34.2247 6.51077 34.2247 5.99808C34.2247 4.93872 33.3833 4.0769 32.3492 4.0769H10.0338C6.75443 4.0769 4.07854 6.77311 4.06885 10.0869C4.06364 11.7052 4.67584 13.2263 5.79261 14.3703C5.98223 14.5646 6.18315 14.7427 6.39271 14.9066H3.93432C2.89971 14.9066 2.05801 15.7684 2.05801 16.8278C2.05801 17.3412 2.25308 17.8238 2.6071 18.1865C2.96177 18.5498 3.43303 18.7497 3.93424 18.7497H4.25143C4.83535 19.3186 5.1672 20.1039 5.1672 20.9365C5.1672 21.7694 4.83528 22.5549 4.2511 23.1237H3.93432C2.89971 23.1237 2.05801 23.9855 2.05801 25.0448C2.05801 25.5575 2.25276 26.0401 2.60782 26.4052C2.74059 26.5407 2.88962 26.6534 3.05041 26.7414C1.22655 27.9009 0.0073651 29.9494 -2.08602e-06 32.28C-0.00504701 34.042 0.661443 35.6981 1.87679 36.9431C3.08757 38.1834 4.69706 38.8664 6.40873 38.8664H38.998C39.5323 38.8664 40.0349 38.653 40.4133 38.2654C40.7917 37.8778 41 37.363 41 36.8157C41 35.6849 40.1019 34.7649 38.998 34.7649ZM39.7988 27.7873C39.7988 28.006 39.7154 28.2118 39.5639 28.367C39.4124 28.5221 39.2115 28.6076 38.998 28.6076H34.1954V26.967H38.998C39.4396 26.967 39.7988 27.335 39.7988 27.7873ZM6.64208 13.5004C5.75313 12.5899 5.26585 11.3791 5.27002 10.0909C5.27779 7.45331 7.41475 5.30745 10.0338 5.30745H32.3492C32.721 5.30745 33.0235 5.61729 33.0235 5.99816C33.0235 6.18306 32.9532 6.35713 32.827 6.48682C32.6988 6.61766 32.5291 6.68968 32.3492 6.68968H13.152C12.8203 6.68968 12.5514 6.96514 12.5514 7.30492C12.5514 7.64469 12.8203 7.92015 13.152 7.92015H30.5054C30.1229 8.57238 29.9146 9.32477 29.9146 10.1069C29.9146 10.8889 30.1228 11.6412 30.5051 12.2932H9.95539C9.3765 12.2932 8.83422 12.0588 8.42846 11.633C8.02294 11.2076 7.80721 10.6465 7.82115 10.053C7.84877 8.87696 8.82917 7.92015 10.0066 7.92015H10.7497C11.0814 7.92015 11.3503 7.64469 11.3503 7.30492C11.3503 6.96514 11.0814 6.68968 10.7497 6.68968H10.0066C8.1827 6.68968 6.66354 8.18511 6.62022 10.0234C6.59852 10.951 6.93548 11.828 7.5689 12.4926C8.20264 13.1575 9.05019 13.5237 9.95539 13.5237H32.3492C32.721 13.5237 33.0235 13.8339 33.0235 14.2152C33.0235 14.4 32.9534 14.5735 32.8263 14.7038C32.6985 14.8346 32.529 14.9068 32.3492 14.9068H9.95539C8.70393 14.9068 7.52718 14.4073 6.64208 13.5004ZM3.45649 17.3165C3.32925 17.1862 3.25918 17.0127 3.25918 16.8278C3.25918 16.447 3.56203 16.1371 3.93432 16.1371H9.95531H32.3492H33.5159C36.1347 16.1371 38.2721 18.2831 38.2805 20.9208C38.2847 22.2088 37.7974 23.4195 36.9085 24.3301C36.1665 25.0903 35.2194 25.5628 34.1954 25.6962V24.2982C34.8701 24.1731 35.4894 23.8383 35.9803 23.3232C36.614 22.6583 36.9511 21.781 36.9295 20.8533C36.8872 19.0149 35.3684 17.5193 33.544 17.5193H3.93432C3.7539 17.5194 3.58421 17.4473 3.45649 17.3165ZM5.77771 18.7499H33.544C34.7215 18.7499 35.7015 19.7066 35.7286 20.8826C35.7425 21.4765 35.5267 22.038 35.1208 22.4638C34.8599 22.7375 34.5425 22.9317 34.1954 23.0357V21.749C34.1954 21.4092 33.9266 21.1337 33.5949 21.1337H21.7157C21.3839 21.1337 21.1151 21.4092 21.1151 21.749C21.1151 22.0888 21.3839 22.3642 21.7157 22.3642H25.7694V23.1238H5.77747C6.16001 22.4715 6.36845 21.719 6.36845 20.9367C6.36845 20.1545 6.16009 19.4021 5.77771 18.7499ZM26.9706 22.3642H32.9943V31.0867L30.2586 29.635C30.1721 29.589 30.0772 29.5661 29.9824 29.5661C29.8877 29.5661 29.7928 29.589 29.7062 29.6351L26.9706 31.0867L26.9706 22.3642ZM3.93432 24.3542H25.7694V25.7364H3.93432C3.75382 25.7364 3.58389 25.6644 3.45721 25.5351C3.32949 25.4039 3.25918 25.2298 3.25918 25.0449C3.25926 24.6641 3.56211 24.3542 3.93432 24.3542ZM39.5639 37.3954C39.4124 37.5506 39.2114 37.636 38.998 37.636H6.40873C5.01793 37.636 3.7101 37.0809 2.72626 36.073C1.73865 35.0614 1.19709 33.7156 1.20117 32.2838C1.21038 29.3521 3.58526 26.967 6.49513 26.967H25.7693V28.6076H6.46479C4.49246 28.6076 2.85014 30.2242 2.80369 32.2114C2.78055 33.2145 3.14499 34.1626 3.82997 34.8811C4.51496 35.5996 5.43074 35.9953 6.40865 35.9953H28.3004C28.6322 35.9953 28.901 35.7199 28.901 35.3801C28.901 35.0403 28.6322 34.7649 28.3004 34.7649H6.40873C5.75705 34.7649 5.14638 34.5008 4.68937 34.0214C4.23229 33.542 3.98909 32.9095 4.00454 32.2407C4.03553 30.9159 5.13917 29.8381 6.46479 29.8381H25.7694V32.0982C25.7694 32.313 25.8787 32.5122 26.0579 32.6239C26.2371 32.7355 26.4601 32.7433 26.6463 32.6444L29.9824 30.874L33.3187 32.6444C33.4055 32.6905 33.5004 32.7134 33.5949 32.7134C33.7033 32.7134 33.8114 32.6834 33.907 32.6239C34.0861 32.5122 34.1955 32.313 34.1955 32.0982V29.838H37.0793C36.6292 30.5661 36.3827 31.4161 36.3827 32.3014C36.3827 33.1868 36.6292 34.0367 37.0794 34.7649H30.7027C30.371 34.7649 30.1022 35.0403 30.1022 35.3801C30.1022 35.7199 30.371 35.9953 30.7027 35.9953H38.998C39.4396 35.9953 39.7988 36.3633 39.7988 36.8157C39.7988 37.0343 39.7154 37.2402 39.5639 37.3954Z" fill="#1ABC9C"/>
		</g>
		<defs>
		  <clipPath id="clip0_35_52">
			<rect width="41" height="42" fill="white" transform="translate(0 0.47168)"/>
		  </clipPath>
		</defs>
	  </svg>`
	},
	color: {
		type: "String",
		default: "#1ABC9C"
	}
}

registerBlockType(metadata, {
	attributes,
	edit: Edit,
	save: Save,
});