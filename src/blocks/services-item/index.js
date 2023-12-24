import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';
import './style.scss';
import "bootstrap-icons/font/bootstrap-icons.css";

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
