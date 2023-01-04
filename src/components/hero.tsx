import { HeroProps } from '../types/index';

function Hero({ imageUrl = 'https://via.placeholder.com/1800x400' }: HeroProps) {
	return (
		<section className="hero">
			<img alt="rick and morty" src={imageUrl}></img>
		</section>

	);
}

export default Hero;

