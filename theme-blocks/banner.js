import { InnerBlocks } from "@wordpress/block-editor"
import { ReactComponent as BannerSVG } from './banner.svg';

wp.blocks.registerBlockType("ieeesbtkmce/banner", {
    title: "Banner",
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent() {
    return (
        <div className="m-8">
            <h1 className="text-4xl font-semibold text-primary-900 text-center">Empowering with Skills, Confidence <br /> & Sense of Purpose</h1>
            <div className="w-full">
                <BannerSVG className="w-full" />
            </div>
        </div>
    )
}

function SaveComponent() {
    return (
        <div className="m-8">
            <h1 className="text-4xl font-semibold text-primary-900 text-center">Empowering with Skills, Confidence <br /> & Sense of Purpose</h1>
            <div className="w-full">
                <BannerSVG className="w-full" />
            </div>
        </div>
    )
}