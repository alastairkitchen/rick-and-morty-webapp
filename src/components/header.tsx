import { Link } from 'react-router-dom'


function Header() {
	return (
		<>
			<header className="header">
				<Link to='/'><img className="header__image" alt="rick and morty" src="/rick-and-morty-silhouette.jpg"></img></Link>
				<nav>
					<ul className="navigation">
						<li><Link to='/' className="navigation__anchor">Home</Link></li>
						<li><Link to='/characters' className="navigation__anchor">Characters</Link></li>
						<li><Link to='/episodes' className="navigation__anchor">Episodes</Link></li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;

