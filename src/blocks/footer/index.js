import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';

const attributes = {}

registerBlockType(metadata, {
	attributes,
	edit: Edit,
	save: Save,
});
