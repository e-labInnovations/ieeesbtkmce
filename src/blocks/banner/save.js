import { ReactComponent as BannerSVG } from './banner.svg';

export default function save({ attributes }) {
	return (
        <div className="m-8">
            <h1 className="text-4xl font-semibold text-primary-900 text-center">Empowering with Skills, Confidence <br /> & Sense of Purpose</h1>
            <div className="w-full">
                <BannerSVG className="w-full" />
            </div>
        </div>
    )
}
