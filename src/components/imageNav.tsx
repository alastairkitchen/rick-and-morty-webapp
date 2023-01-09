import { ImageNavProps, ImageNavItem } from '../types/index';
import { Link } from 'react-router-dom';

function ImageNav({ items }: ImageNavProps) {

	return (
		<nav className="image-nav">
			<ul className="image-nav__list">
				{items?.map((item: ImageNavItem, id, i) => {
					return (
						<li key={`${id}-${i}`} className="image-nav__list-item">
							<Link className="image-nav__anchor" to={item.url}>{item.title}</Link>
						</li>
					)
				})}
			</ul>
		</nav>

	);
}

export default ImageNav;

