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
					<p>Welcome to the rick and morty webapp</p>
					<p>Search and view information about characters on the show in the characters section and view episodes information in the episodes section.</p>
					<p>This site was built as a personal project using the open source <a target='_blank' rel="noreferrer" href='https://rickandmortyapi.com/'>Rick and Morty api</a>, Kudos to <a target='_blank' href="https://github.com/afuh">Axel Fuhrmann</a> for doing a fantastic job!</p>
					<p>I want to make it clear that none of the content or images are owned by me and are soley used as a means of showcasing an app build.</p>
				</div>
			</div>

			<div className="site-content__row site-content--cyan row-padding--medium">
				<div className="site-content__container">
					<ImageNav id='home-items' items={homeItems} />
				</div>
			</div>

		</Layout>
	);
}

export default Home;

