import { HeroProps } from '../types/index';

function Hero({ imageUrl = 'https://via.placeholder.com/1800x400' }: HeroProps) {
	return (
		<section className="hero">
			<div className="site-content__row">
				<div className="site-content__container">
					<img alt="rick and morty" src={imageUrl}></img>
				</div>
			</div>
		</section>

	);
}

export default Hero;

