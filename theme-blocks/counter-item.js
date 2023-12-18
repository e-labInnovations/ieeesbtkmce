import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from "@wordpress/block-editor"
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n'
const { Fragment } = wp.element

registerBlockType("ieeesbtkmce/counter-item", {
    title: "Counter Item",
    icon: {
        src: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99ZM8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z" />
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
        </svg>
    },
    attributes: {
        counter: {
            type: "object",
            default: {
                name: "Active members",
                count: 256,
                suffix: "+"
            }
        }
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent({ attributes, setAttributes }) {
    const { counter } = attributes

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title={__('Counter')}>
                    <TextControl
                        label="Name"
                        value={ counter.name }
                        onChange={ ( name ) => setAttributes({counter: {...counter, name}}) }
                    />
                    <TextControl
                        label="Count"
                        type='number'
                        value={ counter.count }
                        onChange={ ( count ) => setAttributes({counter: {...counter, count}}) }
                    />
                    <TextControl
                        label="Suffix"
                        value={ counter.suffix }
                        onChange={ ( suffix ) => setAttributes({counter: {...counter, suffix}}) }
                    />
                </PanelBody>
            </InspectorControls>
            <div className="flex flex-col items-center">
                <div className="counter-no">
                    <span class="counters-count">{counter.count}</span>{counter.suffix}
                </div>
                <span className="font-poppins sm:text-xl text-primary-800">{counter.name}</span>
            </div>
        </Fragment>
    )
}

function SaveComponent({ attributes }) {
    const { counter } = attributes

    return (
        <div className="flex flex-col items-center">
            <div className="counter-no">
                <span class="counters-count">{counter.count}</span>{counter.suffix}
            </div>
            <span className="font-poppins sm:text-xl text-primary-800">{counter.name}</span>
        </div>
    )
}