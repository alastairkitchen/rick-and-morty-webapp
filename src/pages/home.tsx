import { ImageNavItem } from '../types/index';
import Layout from '../components/layout';
import ImageNav from '../components/imageNav';

function Home() {

	const homeItems: ImageNavItem[] = [
		{
			title: 'Characters',
			url: '/characters'
		},
		{
			title: 'Episodes',
			url: '/episodes'
		}
	]

	return (
		<Layout title='Homepage' imageUrl="/images/rick-and-morty-header.jpg">
			<div className="site-content__row">
				<div className="site-content__container">
					<p>Welcome to the rick and morty app.. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
				</div>
			</div>

			<div className="site-content__row site-content--cyan row-padding--medium">
				<div className="site-content__container">
					<ImageNav items={homeItems} />
				</div>
			</div>

		</Layout>
	);
}

export default Home;

