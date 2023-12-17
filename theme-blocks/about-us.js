import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, MediaPlaceholder, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n'
const { Fragment } = wp.element

registerBlockType("ieeesbtkmce/about-us", {
    title: "About Us",
    icon: "info",
    attributes: {
        subTitle: {
            type: "String",
            source: 'html',
            selector: 'h3',
        },
        content: {
            type: "String",
            source: 'html',
            selector: 'p',
        },
        id: {
            type: "number"
        },
        url: {
            type: "string"
        },
        alt: {
            type: "string"
        }
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { subTitle, content, id, url, alt } = attributes

    console.log(attributes);

    return (
        <Fragment>
            <div className="flex flex-col px-12 sm:flex-row sm:px-12 md:px-24 xl:px-48 ">
                <div className="flex w-full sm:w-1/2 p-3 sm:px-8 md:px-10 justify-center">
                    <div className="flex group bg-contain bg-no-repeat bg-center bg-[url('https://gcdnb.pbrd.co/images/PkifbtJpKNDA.png?o=1')] p-12 sm:p-8 lg:p-16 xl:p-18 h-">
                        {url? (
                            <>
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={ (media) => setAttributes({
                                        id: media.id,
                                        alt: media.alt || "About Us Image",
                                        url: media.url
                                    }) }
                                    allowedTypes={ ['image'] }
                                    value={ id }
                                    render={ ( { open } ) => (
                                        <img src={ url } onClick={ open } className="hidden group-hover:block cursor-edit rounded-full object-cover aspect-square h-full w-full shadow" alt={ alt } />
                                    ) }
                                />
                            </MediaUploadCheck>
                            <img src={ url } className="block group-hover:hidden rounded-full object-cover aspect-square h-full w-full shadow" alt={ alt } />
                            </>
                        ) : (
                            <MediaPlaceholder onSelect = { (media) => setAttributes({
                                    id: media.id,
                                    alt: media.alt || "About Us Image",
                                    url: media.url
                                }) }
                                allowedTypes = { [ 'image' ] }
                                multiple = { false }
                                labels = { { title: 'About Us Image' } } />
                        )}
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full sm:w-1/2 p-3">
                    <h2 className="font-sans text-3xl my-5 sm:mb-6 text-primary-800">About Us</h2>
                    <RichText
                        className = "mb-1 text-xl sm:mb-2 md:mb-2"
                        tagName="h3"
                        value={ subTitle }
                        allowedFormats={ [ 'core/bold', 'core/italic' ] }
                        onChange={ ( subTitle ) => setAttributes( { subTitle } ) }
                        placeholder={ __( 'Heading...' ) }
                    />
                    <RichText
                        className = "font-light"
                        tagName="p"
                        value={ content }
                        allowedFormats={ [ 'core/bold', 'core/italic' ] }
                        onChange={ ( content ) => setAttributes( { content } ) }
                        placeholder={ __( 'Content...' ) }
                    />
                    {/* <h3 className="mb-1 text-xl sm:mb-2 md:mb-2">Lorem Ipsum</h3> */}
                    {/* <p className="font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error cupiditate nostrum, repellendus harum fugiat architecto! Eum, recusandae quod tempora magnam voluptatibus exercitationem incidunt veritatis delectus expedita porro quasi nam aspernatur aliquam magni dicta debitis quam repudiandae?</p> */}
                    <div className="mt-8 flex flex-row sm:mt-8 md:mt-10 xl:mt-12">
                        <a href="#" className="rounded p-2 px-5 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400 no-underline">More Details</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

function SaveComponent({attributes}) {
    const blockProps = useBlockProps.save();
    const { subTitle, content, id, url, alt } = attributes

    return (
        <div className="flex flex-col px-12 sm:flex-row sm:px-12 md:px-24 xl:px-48 ">
            <div className="flex w-full sm:w-1/2 p-3 sm:px-8 md:px-10 justify-center">
                <div className="flex bg-contain bg-no-repeat bg-center bg-[url('https://gcdnb.pbrd.co/images/PkifbtJpKNDA.png?o=1')] p-12 sm:p-8 lg:p-16 xl:p-18 h-">
                    {url ? (
                        <img src={ url } className="rounded-full object-cover aspect-square h-full w-full shadow" alt={ alt } />
                        ) : (
                        <img src="https://picsum.photos/600/600" className="rounded-full object-cover aspect-square h-full w-full shadow" alt="About Us Image" />
                    )}
                </div>
            </div>
            <div className="flex flex-col justify-center w-full sm:w-1/2 p-3">
                <h2 className="font-sans text-3xl my-5 sm:mb-6 text-primary-800">About Us</h2>
                <RichText.Content tagName="h3" value={ subTitle } className="mb-1 text-xl sm:mb-2 md:mb-2" />
                <RichText.Content tagName="p" value={ content } className="font-light" />
                <div className="mt-8 flex flex-row sm:mt-8 md:mt-10 xl:mt-12">
                    <a href="#" className="rounded p-2 px-5 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400 no-underline">More Details</a>
                </div>
            </div>
        </div>
    )
}